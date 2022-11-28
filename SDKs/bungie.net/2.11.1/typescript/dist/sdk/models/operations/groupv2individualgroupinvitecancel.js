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
var GroupV2IndividualGroupInviteCancelPathParams = /** @class */ (function (_super) {
    __extends(GroupV2IndividualGroupInviteCancelPathParams, _super);
    function GroupV2IndividualGroupInviteCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", Number)
    ], GroupV2IndividualGroupInviteCancelPathParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipId" }),
        __metadata("design:type", Number)
    ], GroupV2IndividualGroupInviteCancelPathParams.prototype, "membershipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], GroupV2IndividualGroupInviteCancelPathParams.prototype, "membershipType", void 0);
    return GroupV2IndividualGroupInviteCancelPathParams;
}(SpeakeasyBase));
export { GroupV2IndividualGroupInviteCancelPathParams };
var GroupV2IndividualGroupInviteCancelSecurity = /** @class */ (function (_super) {
    __extends(GroupV2IndividualGroupInviteCancelSecurity, _super);
    function GroupV2IndividualGroupInviteCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GroupV2IndividualGroupInviteCancelSecurity.prototype, "oauth2", void 0);
    return GroupV2IndividualGroupInviteCancelSecurity;
}(SpeakeasyBase));
export { GroupV2IndividualGroupInviteCancelSecurity };
var GroupV2IndividualGroupInviteCancelRequest = /** @class */ (function (_super) {
    __extends(GroupV2IndividualGroupInviteCancelRequest, _super);
    function GroupV2IndividualGroupInviteCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupV2IndividualGroupInviteCancelPathParams)
    ], GroupV2IndividualGroupInviteCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupV2IndividualGroupInviteCancelSecurity)
    ], GroupV2IndividualGroupInviteCancelRequest.prototype, "security", void 0);
    return GroupV2IndividualGroupInviteCancelRequest;
}(SpeakeasyBase));
export { GroupV2IndividualGroupInviteCancelRequest };
var GroupV2IndividualGroupInviteCancelResponse = /** @class */ (function (_super) {
    __extends(GroupV2IndividualGroupInviteCancelResponse, _super);
    function GroupV2IndividualGroupInviteCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2IndividualGroupInviteCancelResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupV2IndividualGroupInviteCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupV2IndividualGroupInviteCancelResponse.prototype, "statusCode", void 0);
    return GroupV2IndividualGroupInviteCancelResponse;
}(SpeakeasyBase));
export { GroupV2IndividualGroupInviteCancelResponse };
