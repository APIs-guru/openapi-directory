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
import { Size } from "./size";
export var CreativeSizeAllowedFormatsEnum;
(function (CreativeSizeAllowedFormatsEnum) {
    CreativeSizeAllowedFormatsEnum["Unknown"] = "UNKNOWN";
    CreativeSizeAllowedFormatsEnum["Audio"] = "AUDIO";
})(CreativeSizeAllowedFormatsEnum || (CreativeSizeAllowedFormatsEnum = {}));
export var CreativeSizeCreativeSizeTypeEnum;
(function (CreativeSizeCreativeSizeTypeEnum) {
    CreativeSizeCreativeSizeTypeEnum["CreativeSizeTypeUnspecified"] = "CREATIVE_SIZE_TYPE_UNSPECIFIED";
    CreativeSizeCreativeSizeTypeEnum["Regular"] = "REGULAR";
    CreativeSizeCreativeSizeTypeEnum["Interstitial"] = "INTERSTITIAL";
    CreativeSizeCreativeSizeTypeEnum["Video"] = "VIDEO";
    CreativeSizeCreativeSizeTypeEnum["Native"] = "NATIVE";
})(CreativeSizeCreativeSizeTypeEnum || (CreativeSizeCreativeSizeTypeEnum = {}));
export var CreativeSizeNativeTemplateEnum;
(function (CreativeSizeNativeTemplateEnum) {
    CreativeSizeNativeTemplateEnum["UnknownNativeTemplate"] = "UNKNOWN_NATIVE_TEMPLATE";
    CreativeSizeNativeTemplateEnum["NativeContentAd"] = "NATIVE_CONTENT_AD";
    CreativeSizeNativeTemplateEnum["NativeAppInstallAd"] = "NATIVE_APP_INSTALL_AD";
    CreativeSizeNativeTemplateEnum["NativeVideoContentAd"] = "NATIVE_VIDEO_CONTENT_AD";
    CreativeSizeNativeTemplateEnum["NativeVideoAppInstallAd"] = "NATIVE_VIDEO_APP_INSTALL_AD";
})(CreativeSizeNativeTemplateEnum || (CreativeSizeNativeTemplateEnum = {}));
export var CreativeSizeSkippableAdTypeEnum;
(function (CreativeSizeSkippableAdTypeEnum) {
    CreativeSizeSkippableAdTypeEnum["SkippableAdTypeUnspecified"] = "SKIPPABLE_AD_TYPE_UNSPECIFIED";
    CreativeSizeSkippableAdTypeEnum["Generic"] = "GENERIC";
    CreativeSizeSkippableAdTypeEnum["InstreamSelect"] = "INSTREAM_SELECT";
    CreativeSizeSkippableAdTypeEnum["NotSkippable"] = "NOT_SKIPPABLE";
})(CreativeSizeSkippableAdTypeEnum || (CreativeSizeSkippableAdTypeEnum = {}));
// CreativeSize
/**
 * Specifies the size of the creative.
**/
var CreativeSize = /** @class */ (function (_super) {
    __extends(CreativeSize, _super);
    function CreativeSize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedFormats" }),
        __metadata("design:type", Array)
    ], CreativeSize.prototype, "allowedFormats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companionSizes", elemType: Size }),
        __metadata("design:type", Array)
    ], CreativeSize.prototype, "companionSizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeSizeType" }),
        __metadata("design:type", String)
    ], CreativeSize.prototype, "creativeSizeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nativeTemplate" }),
        __metadata("design:type", String)
    ], CreativeSize.prototype, "nativeTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Size)
    ], CreativeSize.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skippableAdType" }),
        __metadata("design:type", String)
    ], CreativeSize.prototype, "skippableAdType", void 0);
    return CreativeSize;
}(SpeakeasyBase));
export { CreativeSize };
