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
var PutUsersMeNotificationSettingsRequestBody = /** @class */ (function (_super) {
    __extends(PutUsersMeNotificationSettingsRequestBody, _super);
    function PutUsersMeNotificationSettingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abuseAsModerator" }),
        __metadata("design:type", Number)
    ], PutUsersMeNotificationSettingsRequestBody.prototype, "abuseAsModerator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoInstanceFollowing" }),
        __metadata("design:type", Number)
    ], PutUsersMeNotificationSettingsRequestBody.prototype, "autoInstanceFollowing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blacklistOnMyVideo" }),
        __metadata("design:type", Number)
    ], PutUsersMeNotificationSettingsRequestBody.prototype, "blacklistOnMyVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentMention" }),
        __metadata("design:type", Number)
    ], PutUsersMeNotificationSettingsRequestBody.prototype, "commentMention", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=myVideoImportFinished" }),
        __metadata("design:type", Number)
    ], PutUsersMeNotificationSettingsRequestBody.prototype, "myVideoImportFinished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=myVideoPublished" }),
        __metadata("design:type", Number)
    ], PutUsersMeNotificationSettingsRequestBody.prototype, "myVideoPublished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newCommentOnMyVideo" }),
        __metadata("design:type", Number)
    ], PutUsersMeNotificationSettingsRequestBody.prototype, "newCommentOnMyVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newFollow" }),
        __metadata("design:type", Number)
    ], PutUsersMeNotificationSettingsRequestBody.prototype, "newFollow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newInstanceFollower" }),
        __metadata("design:type", Number)
    ], PutUsersMeNotificationSettingsRequestBody.prototype, "newInstanceFollower", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newUserRegistration" }),
        __metadata("design:type", Number)
    ], PutUsersMeNotificationSettingsRequestBody.prototype, "newUserRegistration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newVideoFromSubscription" }),
        __metadata("design:type", Number)
    ], PutUsersMeNotificationSettingsRequestBody.prototype, "newVideoFromSubscription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoAutoBlacklistAsModerator" }),
        __metadata("design:type", Number)
    ], PutUsersMeNotificationSettingsRequestBody.prototype, "videoAutoBlacklistAsModerator", void 0);
    return PutUsersMeNotificationSettingsRequestBody;
}(SpeakeasyBase));
export { PutUsersMeNotificationSettingsRequestBody };
var PutUsersMeNotificationSettingsSecurity = /** @class */ (function (_super) {
    __extends(PutUsersMeNotificationSettingsSecurity, _super);
    function PutUsersMeNotificationSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], PutUsersMeNotificationSettingsSecurity.prototype, "oAuth2", void 0);
    return PutUsersMeNotificationSettingsSecurity;
}(SpeakeasyBase));
export { PutUsersMeNotificationSettingsSecurity };
var PutUsersMeNotificationSettingsRequest = /** @class */ (function (_super) {
    __extends(PutUsersMeNotificationSettingsRequest, _super);
    function PutUsersMeNotificationSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutUsersMeNotificationSettingsRequestBody)
    ], PutUsersMeNotificationSettingsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutUsersMeNotificationSettingsSecurity)
    ], PutUsersMeNotificationSettingsRequest.prototype, "security", void 0);
    return PutUsersMeNotificationSettingsRequest;
}(SpeakeasyBase));
export { PutUsersMeNotificationSettingsRequest };
var PutUsersMeNotificationSettingsResponse = /** @class */ (function (_super) {
    __extends(PutUsersMeNotificationSettingsResponse, _super);
    function PutUsersMeNotificationSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutUsersMeNotificationSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutUsersMeNotificationSettingsResponse.prototype, "statusCode", void 0);
    return PutUsersMeNotificationSettingsResponse;
}(SpeakeasyBase));
export { PutUsersMeNotificationSettingsResponse };
