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
var CreativeVideoSearchItem = /** @class */ (function (_super) {
    __extends(CreativeVideoSearchItem, _super);
    function CreativeVideoSearchItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=allowed_use" }),
        __metadata("design:type", AllowedUse)
    ], CreativeVideoSearchItem.prototype, "allowedUse", void 0);
    __decorate([
        Metadata({ data: "json, name=artist" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "artist", void 0);
    __decorate([
        Metadata({ data: "json, name=asset_family" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "assetFamily", void 0);
    __decorate([
        Metadata({ data: "json, name=caption" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "caption", void 0);
    __decorate([
        Metadata({ data: "json, name=clip_length" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "clipLength", void 0);
    __decorate([
        Metadata({ data: "json, name=collection_code" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "collectionCode", void 0);
    __decorate([
        Metadata({ data: "json, name=collection_id" }),
        __metadata("design:type", Number)
    ], CreativeVideoSearchItem.prototype, "collectionId", void 0);
    __decorate([
        Metadata({ data: "json, name=collection_name" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "collectionName", void 0);
    __decorate([
        Metadata({ data: "json, name=color_type" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "colorType", void 0);
    __decorate([
        Metadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "copyright", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], CreativeVideoSearchItem.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=display_sizes", elemType: shared.VideoSearchItemDisplaySize }),
        __metadata("design:type", Array)
    ], CreativeVideoSearchItem.prototype, "displaySizes", void 0);
    __decorate([
        Metadata({ data: "json, name=download_product" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "downloadProduct", void 0);
    __decorate([
        Metadata({ data: "json, name=era" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "era", void 0);
    __decorate([
        Metadata({ data: "json, name=event_ids" }),
        __metadata("design:type", Array)
    ], CreativeVideoSearchItem.prototype, "eventIds", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=istock_licenses", elemType: shared.IStockLicense }),
        __metadata("design:type", Array)
    ], CreativeVideoSearchItem.prototype, "istockLicenses", void 0);
    __decorate([
        Metadata({ data: "json, name=keywords", elemType: shared.Keyword }),
        __metadata("design:type", Array)
    ], CreativeVideoSearchItem.prototype, "keywords", void 0);
    __decorate([
        Metadata({ data: "json, name=largest_downloads", elemType: shared.Download }),
        __metadata("design:type", Array)
    ], CreativeVideoSearchItem.prototype, "largestDownloads", void 0);
    __decorate([
        Metadata({ data: "json, name=license_model" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "licenseModel", void 0);
    __decorate([
        Metadata({ data: "json, name=mastered_to" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "masteredTo", void 0);
    __decorate([
        Metadata({ data: "json, name=originally_shot_on" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "originallyShotOn", void 0);
    __decorate([
        Metadata({ data: "json, name=product_types" }),
        __metadata("design:type", Array)
    ], CreativeVideoSearchItem.prototype, "productTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=referral_destinations", elemType: shared.ReferralDestination }),
        __metadata("design:type", Array)
    ], CreativeVideoSearchItem.prototype, "referralDestinations", void 0);
    __decorate([
        Metadata({ data: "json, name=shot_speed" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "shotSpeed", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "title", void 0);
    return CreativeVideoSearchItem;
}(SpeakeasyBase));
export { CreativeVideoSearchItem };
