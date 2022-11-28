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
var ReposUpdateInvitationPathParams = /** @class */ (function (_super) {
    __extends(ReposUpdateInvitationPathParams, _super);
    function ReposUpdateInvitationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invitation_id" }),
        __metadata("design:type", Number)
    ], ReposUpdateInvitationPathParams.prototype, "invitationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposUpdateInvitationPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposUpdateInvitationPathParams.prototype, "repo", void 0);
    return ReposUpdateInvitationPathParams;
}(SpeakeasyBase));
export { ReposUpdateInvitationPathParams };
export var ReposUpdateInvitationRequestBodyPermissionsEnum;
(function (ReposUpdateInvitationRequestBodyPermissionsEnum) {
    ReposUpdateInvitationRequestBodyPermissionsEnum["Read"] = "read";
    ReposUpdateInvitationRequestBodyPermissionsEnum["Write"] = "write";
    ReposUpdateInvitationRequestBodyPermissionsEnum["Maintain"] = "maintain";
    ReposUpdateInvitationRequestBodyPermissionsEnum["Triage"] = "triage";
    ReposUpdateInvitationRequestBodyPermissionsEnum["Admin"] = "admin";
})(ReposUpdateInvitationRequestBodyPermissionsEnum || (ReposUpdateInvitationRequestBodyPermissionsEnum = {}));
var ReposUpdateInvitationRequestBody = /** @class */ (function (_super) {
    __extends(ReposUpdateInvitationRequestBody, _super);
    function ReposUpdateInvitationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", String)
    ], ReposUpdateInvitationRequestBody.prototype, "permissions", void 0);
    return ReposUpdateInvitationRequestBody;
}(SpeakeasyBase));
export { ReposUpdateInvitationRequestBody };
var ReposUpdateInvitationRequest = /** @class */ (function (_super) {
    __extends(ReposUpdateInvitationRequest, _super);
    function ReposUpdateInvitationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposUpdateInvitationPathParams)
    ], ReposUpdateInvitationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposUpdateInvitationRequestBody)
    ], ReposUpdateInvitationRequest.prototype, "request", void 0);
    return ReposUpdateInvitationRequest;
}(SpeakeasyBase));
export { ReposUpdateInvitationRequest };
var ReposUpdateInvitationResponse = /** @class */ (function (_super) {
    __extends(ReposUpdateInvitationResponse, _super);
    function ReposUpdateInvitationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposUpdateInvitationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposUpdateInvitationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RepositoryInvitation)
    ], ReposUpdateInvitationResponse.prototype, "repositoryInvitation", void 0);
    return ReposUpdateInvitationResponse;
}(SpeakeasyBase));
export { ReposUpdateInvitationResponse };
