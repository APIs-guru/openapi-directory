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
var GroupV2EditGroupMembershipPathParams = /** @class */ (function (_super) {
    __extends(GroupV2EditGroupMembershipPathParams, _super);
    function GroupV2EditGroupMembershipPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", Number)
    ], GroupV2EditGroupMembershipPathParams.prototype, "groupId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=memberType" }),
        __metadata("design:type", Number)
    ], GroupV2EditGroupMembershipPathParams.prototype, "memberType", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" }),
        __metadata("design:type", Number)
    ], GroupV2EditGroupMembershipPathParams.prototype, "membershipId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], GroupV2EditGroupMembershipPathParams.prototype, "membershipType", void 0);
    return GroupV2EditGroupMembershipPathParams;
}(SpeakeasyBase));
export { GroupV2EditGroupMembershipPathParams };
var GroupV2EditGroupMembershipSecurity = /** @class */ (function (_super) {
    __extends(GroupV2EditGroupMembershipSecurity, _super);
    function GroupV2EditGroupMembershipSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GroupV2EditGroupMembershipSecurity.prototype, "oauth2", void 0);
    return GroupV2EditGroupMembershipSecurity;
}(SpeakeasyBase));
export { GroupV2EditGroupMembershipSecurity };
var GroupV2EditGroupMembershipRequest = /** @class */ (function (_super) {
    __extends(GroupV2EditGroupMembershipRequest, _super);
    function GroupV2EditGroupMembershipRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2EditGroupMembershipPathParams)
    ], GroupV2EditGroupMembershipRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2EditGroupMembershipSecurity)
    ], GroupV2EditGroupMembershipRequest.prototype, "security", void 0);
    return GroupV2EditGroupMembershipRequest;
}(SpeakeasyBase));
export { GroupV2EditGroupMembershipRequest };
var GroupV2EditGroupMembershipResponse = /** @class */ (function (_super) {
    __extends(GroupV2EditGroupMembershipResponse, _super);
    function GroupV2EditGroupMembershipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2EditGroupMembershipResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GroupV2EditGroupMembershipResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GroupV2EditGroupMembershipResponse.prototype, "statusCode", void 0);
    return GroupV2EditGroupMembershipResponse;
}(SpeakeasyBase));
export { GroupV2EditGroupMembershipResponse };
