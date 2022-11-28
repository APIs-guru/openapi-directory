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
import { ActionEnum } from "./actionenum";
// AndroidPushNotificationTemplate
/**
 * Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel.
**/
var AndroidPushNotificationTemplate = /** @class */ (function (_super) {
    __extends(AndroidPushNotificationTemplate, _super);
    function AndroidPushNotificationTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Action" }),
        __metadata("design:type", String)
    ], AndroidPushNotificationTemplate.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Body" }),
        __metadata("design:type", String)
    ], AndroidPushNotificationTemplate.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageIconUrl" }),
        __metadata("design:type", String)
    ], AndroidPushNotificationTemplate.prototype, "imageIconUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageUrl" }),
        __metadata("design:type", String)
    ], AndroidPushNotificationTemplate.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RawContent" }),
        __metadata("design:type", String)
    ], AndroidPushNotificationTemplate.prototype, "rawContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SmallImageIconUrl" }),
        __metadata("design:type", String)
    ], AndroidPushNotificationTemplate.prototype, "smallImageIconUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Sound" }),
        __metadata("design:type", String)
    ], AndroidPushNotificationTemplate.prototype, "sound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], AndroidPushNotificationTemplate.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Url" }),
        __metadata("design:type", String)
    ], AndroidPushNotificationTemplate.prototype, "url", void 0);
    return AndroidPushNotificationTemplate;
}(SpeakeasyBase));
export { AndroidPushNotificationTemplate };
