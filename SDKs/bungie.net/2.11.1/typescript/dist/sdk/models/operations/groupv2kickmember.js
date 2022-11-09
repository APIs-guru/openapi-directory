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
var GroupV2KickMemberPathParams = /** @class */ (function (_super) {
    __extends(GroupV2KickMemberPathParams, _super);
    function GroupV2KickMemberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", Number)
    ], GroupV2KickMemberPathParams.prototype, "groupId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" }),
        __metadata("design:type", Number)
    ], GroupV2KickMemberPathParams.prototype, "membershipId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], GroupV2KickMemberPathParams.prototype, "membershipType", void 0);
    return GroupV2KickMemberPathParams;
}(SpeakeasyBase));
export { GroupV2KickMemberPathParams };
var GroupV2KickMemberSecurity = /** @class */ (function (_super) {
    __extends(GroupV2KickMemberSecurity, _super);
    function GroupV2KickMemberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GroupV2KickMemberSecurity.prototype, "oauth2", void 0);
    return GroupV2KickMemberSecurity;
}(SpeakeasyBase));
export { GroupV2KickMemberSecurity };
var GroupV2KickMemberRequest = /** @class */ (function (_super) {
    __extends(GroupV2KickMemberRequest, _super);
    function GroupV2KickMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2KickMemberPathParams)
    ], GroupV2KickMemberRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2KickMemberSecurity)
    ], GroupV2KickMemberRequest.prototype, "security", void 0);
    return GroupV2KickMemberRequest;
}(SpeakeasyBase));
export { GroupV2KickMemberRequest };
var GroupV2KickMemberResponse = /** @class */ (function (_super) {
    __extends(GroupV2KickMemberResponse, _super);
    function GroupV2KickMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2KickMemberResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GroupV2KickMemberResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GroupV2KickMemberResponse.prototype, "statusCode", void 0);
    return GroupV2KickMemberResponse;
}(SpeakeasyBase));
export { GroupV2KickMemberResponse };
