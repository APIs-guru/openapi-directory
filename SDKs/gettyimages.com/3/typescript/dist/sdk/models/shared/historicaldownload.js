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
import { Dimensions } from "./dimensions";
import { DownloadDetails } from "./downloaddetails";
import { User } from "./user";
var HistoricalDownload = /** @class */ (function (_super) {
    __extends(HistoricalDownload, _super);
    function HistoricalDownload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agreement_name" }),
        __metadata("design:type", String)
    ], HistoricalDownload.prototype, "agreementName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asset_type" }),
        __metadata("design:type", String)
    ], HistoricalDownload.prototype, "assetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_downloaded" }),
        __metadata("design:type", Date)
    ], HistoricalDownload.prototype, "dateDownloaded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions" }),
        __metadata("design:type", Dimensions)
    ], HistoricalDownload.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download_details" }),
        __metadata("design:type", DownloadDetails)
    ], HistoricalDownload.prototype, "downloadDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download_source" }),
        __metadata("design:type", String)
    ], HistoricalDownload.prototype, "downloadSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], HistoricalDownload.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product_id" }),
        __metadata("design:type", Number)
    ], HistoricalDownload.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product_type" }),
        __metadata("design:type", String)
    ], HistoricalDownload.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size_name" }),
        __metadata("design:type", String)
    ], HistoricalDownload.prototype, "sizeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumb_uri" }),
        __metadata("design:type", String)
    ], HistoricalDownload.prototype, "thumbUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", User)
    ], HistoricalDownload.prototype, "user", void 0);
    return HistoricalDownload;
}(SpeakeasyBase));
export { HistoricalDownload };
