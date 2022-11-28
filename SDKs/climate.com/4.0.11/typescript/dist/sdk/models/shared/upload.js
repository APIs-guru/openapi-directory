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
export var UploadContentTypeEnum;
(function (UploadContentTypeEnum) {
    UploadContentTypeEnum["ApplicationVndClimateFieldGeojson"] = "application/vnd.climate.field.geojson";
    UploadContentTypeEnum["ImageVndClimateThermalGeotiff"] = "image/vnd.climate.thermal.geotiff";
    UploadContentTypeEnum["ImageVndClimateNdviGeotiff"] = "image/vnd.climate.ndvi.geotiff";
    UploadContentTypeEnum["ImageVndClimateWaterstressGeotiff"] = "image/vnd.climate.waterstress.geotiff";
    UploadContentTypeEnum["ImageVndClimateElevationGeotiff"] = "image/vnd.climate.elevation.geotiff";
    UploadContentTypeEnum["ImageVndClimateRawGeotiff"] = "image/vnd.climate.raw.geotiff";
    UploadContentTypeEnum["ImageVndClimateRgbGeotiff"] = "image/vnd.climate.rgb.geotiff";
})(UploadContentTypeEnum || (UploadContentTypeEnum = {}));
// Upload
/**
 * Client request to upload data for a user.
**/
var Upload = /** @class */ (function (_super) {
    __extends(Upload, _super);
    function Upload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentType" }),
        __metadata("design:type", String)
    ], Upload.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], Upload.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=md5" }),
        __metadata("design:type", String)
    ], Upload.prototype, "md5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], Upload.prototype, "metadata", void 0);
    return Upload;
}(SpeakeasyBase));
export { Upload };
