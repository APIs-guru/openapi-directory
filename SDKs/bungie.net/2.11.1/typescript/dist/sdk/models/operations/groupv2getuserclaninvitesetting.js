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
var GroupV2GetUserClanInviteSettingPathParams = /** @class */ (function (_super) {
    __extends(GroupV2GetUserClanInviteSettingPathParams, _super);
    function GroupV2GetUserClanInviteSettingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=mType" }),
        __metadata("design:type", Number)
    ], GroupV2GetUserClanInviteSettingPathParams.prototype, "mType", void 0);
    return GroupV2GetUserClanInviteSettingPathParams;
}(SpeakeasyBase));
export { GroupV2GetUserClanInviteSettingPathParams };
var GroupV2GetUserClanInviteSettingSecurity = /** @class */ (function (_super) {
    __extends(GroupV2GetUserClanInviteSettingSecurity, _super);
    function GroupV2GetUserClanInviteSettingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GroupV2GetUserClanInviteSettingSecurity.prototype, "oauth2", void 0);
    return GroupV2GetUserClanInviteSettingSecurity;
}(SpeakeasyBase));
export { GroupV2GetUserClanInviteSettingSecurity };
var GroupV2GetUserClanInviteSettingRequest = /** @class */ (function (_super) {
    __extends(GroupV2GetUserClanInviteSettingRequest, _super);
    function GroupV2GetUserClanInviteSettingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2GetUserClanInviteSettingPathParams)
    ], GroupV2GetUserClanInviteSettingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2GetUserClanInviteSettingSecurity)
    ], GroupV2GetUserClanInviteSettingRequest.prototype, "security", void 0);
    return GroupV2GetUserClanInviteSettingRequest;
}(SpeakeasyBase));
export { GroupV2GetUserClanInviteSettingRequest };
var GroupV2GetUserClanInviteSettingResponse = /** @class */ (function (_super) {
    __extends(GroupV2GetUserClanInviteSettingResponse, _super);
    function GroupV2GetUserClanInviteSettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2GetUserClanInviteSettingResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GroupV2GetUserClanInviteSettingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GroupV2GetUserClanInviteSettingResponse.prototype, "statusCode", void 0);
    return GroupV2GetUserClanInviteSettingResponse;
}(SpeakeasyBase));
export { GroupV2GetUserClanInviteSettingResponse };
