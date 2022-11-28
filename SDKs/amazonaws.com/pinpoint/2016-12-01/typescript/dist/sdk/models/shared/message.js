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
// Message
/**
 * Specifies the content and settings for a push notification that's sent to recipients of a campaign.
**/
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Action" }),
        __metadata("design:type", String)
    ], Message.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Body" }),
        __metadata("design:type", String)
    ], Message.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageIconUrl" }),
        __metadata("design:type", String)
    ], Message.prototype, "imageIconUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageSmallIconUrl" }),
        __metadata("design:type", String)
    ], Message.prototype, "imageSmallIconUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageUrl" }),
        __metadata("design:type", String)
    ], Message.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JsonBody" }),
        __metadata("design:type", String)
    ], Message.prototype, "jsonBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaUrl" }),
        __metadata("design:type", String)
    ], Message.prototype, "mediaUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RawContent" }),
        __metadata("design:type", String)
    ], Message.prototype, "rawContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SilentPush" }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "silentPush", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeToLive" }),
        __metadata("design:type", Number)
    ], Message.prototype, "timeToLive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], Message.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Url" }),
        __metadata("design:type", String)
    ], Message.prototype, "url", void 0);
    return Message;
}(SpeakeasyBase));
export { Message };
