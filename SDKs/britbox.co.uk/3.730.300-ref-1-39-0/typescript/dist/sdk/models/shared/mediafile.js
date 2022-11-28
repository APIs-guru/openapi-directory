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
export var MediaFileDeliveryTypeEnum;
(function (MediaFileDeliveryTypeEnum) {
    MediaFileDeliveryTypeEnum["Stream"] = "Stream";
    MediaFileDeliveryTypeEnum["Progressive"] = "Progressive";
    MediaFileDeliveryTypeEnum["Download"] = "Download";
})(MediaFileDeliveryTypeEnum || (MediaFileDeliveryTypeEnum = {}));
export var MediaFileResolutionEnum1;
(function (MediaFileResolutionEnum1) {
    MediaFileResolutionEnum1["Sd"] = "SD";
    MediaFileResolutionEnum1["Hd720"] = "HD-720";
    MediaFileResolutionEnum1["Hd1080"] = "HD-1080";
    MediaFileResolutionEnum1["Hd4K"] = "HD-4K";
    MediaFileResolutionEnum1["External"] = "External";
    MediaFileResolutionEnum1["Unknown"] = "Unknown";
})(MediaFileResolutionEnum1 || (MediaFileResolutionEnum1 = {}));
var MediaFile = /** @class */ (function (_super) {
    __extends(MediaFile, _super);
    function MediaFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channels" }),
        __metadata("design:type", Number)
    ], MediaFile.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryType" }),
        __metadata("design:type", String)
    ], MediaFile.prototype, "deliveryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drm" }),
        __metadata("design:type", String)
    ], MediaFile.prototype, "drm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MediaFile.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], MediaFile.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], MediaFile.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MediaFile.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], MediaFile.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], MediaFile.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], MediaFile.prototype, "width", void 0);
    return MediaFile;
}(SpeakeasyBase));
export { MediaFile };
