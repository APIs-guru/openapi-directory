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
import * as shared from "../shared";
import { AllowedUse } from "./alloweduse";
import { MaxDimensions } from "./maxdimensions";
var ImageSearchItem = /** @class */ (function (_super) {
    __extends(ImageSearchItem, _super);
    function ImageSearchItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=allowed_use" }),
        __metadata("design:type", AllowedUse)
    ], ImageSearchItem.prototype, "allowedUse", void 0);
    __decorate([
        Metadata({ data: "json, name=alternative_ids" }),
        __metadata("design:type", Map)
    ], ImageSearchItem.prototype, "alternativeIds", void 0);
    __decorate([
        Metadata({ data: "json, name=artist" }),
        __metadata("design:type", String)
    ], ImageSearchItem.prototype, "artist", void 0);
    __decorate([
        Metadata({ data: "json, name=asset_family" }),
        __metadata("design:type", String)
    ], ImageSearchItem.prototype, "assetFamily", void 0);
    __decorate([
        Metadata({ data: "json, name=call_for_image" }),
        __metadata("design:type", Boolean)
    ], ImageSearchItem.prototype, "callForImage", void 0);
    __decorate([
        Metadata({ data: "json, name=caption" }),
        __metadata("design:type", String)
    ], ImageSearchItem.prototype, "caption", void 0);
    __decorate([
        Metadata({ data: "json, name=collection_code" }),
        __metadata("design:type", String)
    ], ImageSearchItem.prototype, "collectionCode", void 0);
    __decorate([
        Metadata({ data: "json, name=collection_id" }),
        __metadata("design:type", Number)
    ], ImageSearchItem.prototype, "collectionId", void 0);
    __decorate([
        Metadata({ data: "json, name=collection_name" }),
        __metadata("design:type", String)
    ], ImageSearchItem.prototype, "collectionName", void 0);
    __decorate([
        Metadata({ data: "json, name=color_type" }),
        __metadata("design:type", String)
    ], ImageSearchItem.prototype, "colorType", void 0);
    __decorate([
        Metadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], ImageSearchItem.prototype, "copyright", void 0);
    __decorate([
        Metadata({ data: "json, name=date_camera_shot" }),
        __metadata("design:type", Date)
    ], ImageSearchItem.prototype, "dateCameraShot", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], ImageSearchItem.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=display_sizes", elemType: shared.ImageSearchItemDisplaySize }),
        __metadata("design:type", Array)
    ], ImageSearchItem.prototype, "displaySizes", void 0);
    __decorate([
        Metadata({ data: "json, name=download_product" }),
        __metadata("design:type", String)
    ], ImageSearchItem.prototype, "downloadProduct", void 0);
    __decorate([
        Metadata({ data: "json, name=editorial_segments" }),
        __metadata("design:type", Array)
    ], ImageSearchItem.prototype, "editorialSegments", void 0);
    __decorate([
        Metadata({ data: "json, name=event_ids" }),
        __metadata("design:type", Array)
    ], ImageSearchItem.prototype, "eventIds", void 0);
    __decorate([
        Metadata({ data: "json, name=graphical_style" }),
        __metadata("design:type", String)
    ], ImageSearchItem.prototype, "graphicalStyle", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ImageSearchItem.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=istock_licenses", elemType: shared.IStockLicense }),
        __metadata("design:type", Array)
    ], ImageSearchItem.prototype, "istockLicenses", void 0);
    __decorate([
        Metadata({ data: "json, name=keywords", elemType: shared.Keyword }),
        __metadata("design:type", Array)
    ], ImageSearchItem.prototype, "keywords", void 0);
    __decorate([
        Metadata({ data: "json, name=largest_downloads", elemType: shared.Download }),
        __metadata("design:type", Array)
    ], ImageSearchItem.prototype, "largestDownloads", void 0);
    __decorate([
        Metadata({ data: "json, name=license_model" }),
        __metadata("design:type", String)
    ], ImageSearchItem.prototype, "licenseModel", void 0);
    __decorate([
        Metadata({ data: "json, name=max_dimensions" }),
        __metadata("design:type", MaxDimensions)
    ], ImageSearchItem.prototype, "maxDimensions", void 0);
    __decorate([
        Metadata({ data: "json, name=orientation" }),
        __metadata("design:type", String)
    ], ImageSearchItem.prototype, "orientation", void 0);
    __decorate([
        Metadata({ data: "json, name=people" }),
        __metadata("design:type", Array)
    ], ImageSearchItem.prototype, "people", void 0);
    __decorate([
        Metadata({ data: "json, name=product_types" }),
        __metadata("design:type", Array)
    ], ImageSearchItem.prototype, "productTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=quality_rank" }),
        __metadata("design:type", Number)
    ], ImageSearchItem.prototype, "qualityRank", void 0);
    __decorate([
        Metadata({ data: "json, name=referral_destinations", elemType: shared.ReferralDestination }),
        __metadata("design:type", Array)
    ], ImageSearchItem.prototype, "referralDestinations", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ImageSearchItem.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=uri_oembed" }),
        __metadata("design:type", String)
    ], ImageSearchItem.prototype, "uriOembed", void 0);
    return ImageSearchItem;
}(SpeakeasyBase));
export { ImageSearchItem };
