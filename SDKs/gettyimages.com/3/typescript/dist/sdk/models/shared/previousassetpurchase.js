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
var PreviousAssetPurchase = /** @class */ (function (_super) {
    __extends(PreviousAssetPurchase, _super);
    function PreviousAssetPurchase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=asset_id" }),
        __metadata("design:type", String)
    ], PreviousAssetPurchase.prototype, "assetId", void 0);
    __decorate([
        Metadata({ data: "json, name=asset_type" }),
        __metadata("design:type", String)
    ], PreviousAssetPurchase.prototype, "assetType", void 0);
    __decorate([
        Metadata({ data: "json, name=date_purchased" }),
        __metadata("design:type", Date)
    ], PreviousAssetPurchase.prototype, "datePurchased", void 0);
    __decorate([
        Metadata({ data: "json, name=download_uri" }),
        __metadata("design:type", String)
    ], PreviousAssetPurchase.prototype, "downloadUri", void 0);
    __decorate([
        Metadata({ data: "json, name=file_size_in_bytes" }),
        __metadata("design:type", String)
    ], PreviousAssetPurchase.prototype, "fileSizeInBytes", void 0);
    __decorate([
        Metadata({ data: "json, name=license_model" }),
        __metadata("design:type", String)
    ], PreviousAssetPurchase.prototype, "licenseModel", void 0);
    __decorate([
        Metadata({ data: "json, name=order_id" }),
        __metadata("design:type", String)
    ], PreviousAssetPurchase.prototype, "orderId", void 0);
    __decorate([
        Metadata({ data: "json, name=purchased_by" }),
        __metadata("design:type", String)
    ], PreviousAssetPurchase.prototype, "purchasedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=size_name" }),
        __metadata("design:type", String)
    ], PreviousAssetPurchase.prototype, "sizeName", void 0);
    __decorate([
        Metadata({ data: "json, name=thumb_uri" }),
        __metadata("design:type", String)
    ], PreviousAssetPurchase.prototype, "thumbUri", void 0);
    return PreviousAssetPurchase;
}(SpeakeasyBase));
export { PreviousAssetPurchase };
