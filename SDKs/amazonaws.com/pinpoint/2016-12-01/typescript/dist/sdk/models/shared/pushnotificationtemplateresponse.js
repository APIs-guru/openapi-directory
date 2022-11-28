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
import { AndroidPushNotificationTemplate } from "./androidpushnotificationtemplate";
import { ApnsPushNotificationTemplate } from "./apnspushnotificationtemplate";
import { DefaultPushNotificationTemplate } from "./defaultpushnotificationtemplate";
import { TemplateTypeEnum } from "./templatetypeenum";
// PushNotificationTemplateResponse
/**
 * Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.
**/
var PushNotificationTemplateResponse = /** @class */ (function (_super) {
    __extends(PushNotificationTemplateResponse, _super);
    function PushNotificationTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ADM" }),
        __metadata("design:type", AndroidPushNotificationTemplate)
    ], PushNotificationTemplateResponse.prototype, "adm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=APNS" }),
        __metadata("design:type", ApnsPushNotificationTemplate)
    ], PushNotificationTemplateResponse.prototype, "apns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], PushNotificationTemplateResponse.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Baidu" }),
        __metadata("design:type", AndroidPushNotificationTemplate)
    ], PushNotificationTemplateResponse.prototype, "baidu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", String)
    ], PushNotificationTemplateResponse.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Default" }),
        __metadata("design:type", DefaultPushNotificationTemplate)
    ], PushNotificationTemplateResponse.prototype, "default", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultSubstitutions" }),
        __metadata("design:type", String)
    ], PushNotificationTemplateResponse.prototype, "defaultSubstitutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GCM" }),
        __metadata("design:type", AndroidPushNotificationTemplate)
    ], PushNotificationTemplateResponse.prototype, "gcm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedDate" }),
        __metadata("design:type", String)
    ], PushNotificationTemplateResponse.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommenderId" }),
        __metadata("design:type", String)
    ], PushNotificationTemplateResponse.prototype, "recommenderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateDescription" }),
        __metadata("design:type", String)
    ], PushNotificationTemplateResponse.prototype, "templateDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateName" }),
        __metadata("design:type", String)
    ], PushNotificationTemplateResponse.prototype, "templateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateType" }),
        __metadata("design:type", String)
    ], PushNotificationTemplateResponse.prototype, "templateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", String)
    ], PushNotificationTemplateResponse.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], PushNotificationTemplateResponse.prototype, "tags", void 0);
    return PushNotificationTemplateResponse;
}(SpeakeasyBase));
export { PushNotificationTemplateResponse };
