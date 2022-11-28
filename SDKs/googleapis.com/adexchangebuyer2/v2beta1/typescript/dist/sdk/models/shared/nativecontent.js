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
import { Image } from "./image";
// NativeContent
/**
 * Native content for a creative.
**/
var NativeContent = /** @class */ (function (_super) {
    __extends(NativeContent, _super);
    function NativeContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserName" }),
        __metadata("design:type", String)
    ], NativeContent.prototype, "advertiserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appIcon" }),
        __metadata("design:type", Image)
    ], NativeContent.prototype, "appIcon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], NativeContent.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callToAction" }),
        __metadata("design:type", String)
    ], NativeContent.prototype, "callToAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickLinkUrl" }),
        __metadata("design:type", String)
    ], NativeContent.prototype, "clickLinkUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickTrackingUrl" }),
        __metadata("design:type", String)
    ], NativeContent.prototype, "clickTrackingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headline" }),
        __metadata("design:type", String)
    ], NativeContent.prototype, "headline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", Image)
    ], NativeContent.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo" }),
        __metadata("design:type", Image)
    ], NativeContent.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceDisplayText" }),
        __metadata("design:type", String)
    ], NativeContent.prototype, "priceDisplayText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starRating" }),
        __metadata("design:type", Number)
    ], NativeContent.prototype, "starRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storeUrl" }),
        __metadata("design:type", String)
    ], NativeContent.prototype, "storeUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoUrl" }),
        __metadata("design:type", String)
    ], NativeContent.prototype, "videoUrl", void 0);
    return NativeContent;
}(SpeakeasyBase));
export { NativeContent };
