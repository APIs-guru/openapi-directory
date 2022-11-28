var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var OrgsCreateInvitationPathParams = /** @class */ (function (_super) {
    __extends(OrgsCreateInvitationPathParams, _super);
    function OrgsCreateInvitationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], OrgsCreateInvitationPathParams.prototype, "org", void 0);
    return OrgsCreateInvitationPathParams;
}(SpeakeasyBase));
export { OrgsCreateInvitationPathParams };
export var OrgsCreateInvitationRequestBodyRoleEnum;
(function (OrgsCreateInvitationRequestBodyRoleEnum) {
    OrgsCreateInvitationRequestBodyRoleEnum["Admin"] = "admin";
    OrgsCreateInvitationRequestBodyRoleEnum["DirectMember"] = "direct_member";
    OrgsCreateInvitationRequestBodyRoleEnum["BillingManager"] = "billing_manager";
})(OrgsCreateInvitationRequestBodyRoleEnum || (OrgsCreateInvitationRequestBodyRoleEnum = {}));
var OrgsCreateInvitationRequestBody = /** @class */ (function (_super) {
    __extends(OrgsCreateInvitationRequestBody, _super);
    function OrgsCreateInvitationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], OrgsCreateInvitationRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invitee_id" }),
        __metadata("design:type", Number)
    ], OrgsCreateInvitationRequestBody.prototype, "inviteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], OrgsCreateInvitationRequestBody.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team_ids" }),
        __metadata("design:type", Array)
    ], OrgsCreateInvitationRequestBody.prototype, "teamIds", void 0);
    return OrgsCreateInvitationRequestBody;
}(SpeakeasyBase));
export { OrgsCreateInvitationRequestBody };
var OrgsCreateInvitationRequest = /** @class */ (function (_super) {
    __extends(OrgsCreateInvitationRequest, _super);
    function OrgsCreateInvitationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsCreateInvitationPathParams)
    ], OrgsCreateInvitationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", OrgsCreateInvitationRequestBody)
    ], OrgsCreateInvitationRequest.prototype, "request", void 0);
    return OrgsCreateInvitationRequest;
}(SpeakeasyBase));
export { OrgsCreateInvitationRequest };
var OrgsCreateInvitationResponse = /** @class */ (function (_super) {
    __extends(OrgsCreateInvitationResponse, _super);
    function OrgsCreateInvitationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrgsCreateInvitationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrgsCreateInvitationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], OrgsCreateInvitationResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrganizationInvitation)
    ], OrgsCreateInvitationResponse.prototype, "organizationInvitation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], OrgsCreateInvitationResponse.prototype, "validationError", void 0);
    return OrgsCreateInvitationResponse;
}(SpeakeasyBase));
export { OrgsCreateInvitationResponse };
