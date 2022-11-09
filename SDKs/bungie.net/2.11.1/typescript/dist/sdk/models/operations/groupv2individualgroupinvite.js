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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GroupV2IndividualGroupInvitePathParams = /** @class */ (function (_super) {
    __extends(GroupV2IndividualGroupInvitePathParams, _super);
    function GroupV2IndividualGroupInvitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", Number)
    ], GroupV2IndividualGroupInvitePathParams.prototype, "groupId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" }),
        __metadata("design:type", Number)
    ], GroupV2IndividualGroupInvitePathParams.prototype, "membershipId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], GroupV2IndividualGroupInvitePathParams.prototype, "membershipType", void 0);
    return GroupV2IndividualGroupInvitePathParams;
}(SpeakeasyBase));
export { GroupV2IndividualGroupInvitePathParams };
var GroupV2IndividualGroupInviteSecurity = /** @class */ (function (_super) {
    __extends(GroupV2IndividualGroupInviteSecurity, _super);
    function GroupV2IndividualGroupInviteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GroupV2IndividualGroupInviteSecurity.prototype, "oauth2", void 0);
    return GroupV2IndividualGroupInviteSecurity;
}(SpeakeasyBase));
export { GroupV2IndividualGroupInviteSecurity };
var GroupV2IndividualGroupInviteRequest = /** @class */ (function (_super) {
    __extends(GroupV2IndividualGroupInviteRequest, _super);
    function GroupV2IndividualGroupInviteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2IndividualGroupInvitePathParams)
    ], GroupV2IndividualGroupInviteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2IndividualGroupInviteSecurity)
    ], GroupV2IndividualGroupInviteRequest.prototype, "security", void 0);
    return GroupV2IndividualGroupInviteRequest;
}(SpeakeasyBase));
export { GroupV2IndividualGroupInviteRequest };
var GroupV2IndividualGroupInviteResponse = /** @class */ (function (_super) {
    __extends(GroupV2IndividualGroupInviteResponse, _super);
    function GroupV2IndividualGroupInviteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2IndividualGroupInviteResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GroupV2IndividualGroupInviteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GroupV2IndividualGroupInviteResponse.prototype, "statusCode", void 0);
    return GroupV2IndividualGroupInviteResponse;
}(SpeakeasyBase));
export { GroupV2IndividualGroupInviteResponse };
