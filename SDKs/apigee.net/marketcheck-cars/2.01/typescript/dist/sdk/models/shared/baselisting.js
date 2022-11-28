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
import { Build } from "./build";
import { NestDealer } from "./nestdealer";
import { ListingFinance } from "./listingfinance";
import { ListingLease } from "./listinglease";
import { ListingNestMedia } from "./listingnestmedia";
// BaseListing
/**
 * Minimal set of attributes describing a listing
**/
var BaseListing = /** @class */ (function (_super) {
    __extends(BaseListing, _super);
    function BaseListing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build" }),
        __metadata("design:type", Build)
    ], BaseListing.prototype, "build", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carfax_1_owner" }),
        __metadata("design:type", Boolean)
    ], BaseListing.prototype, "carfax1Owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carfax_clean_title" }),
        __metadata("design:type", Boolean)
    ], BaseListing.prototype, "carfaxCleanTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_source" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealer" }),
        __metadata("design:type", NestDealer)
    ], BaseListing.prototype, "dealer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dist" }),
        __metadata("design:type", Number)
    ], BaseListing.prototype, "dist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dom" }),
        __metadata("design:type", Number)
    ], BaseListing.prototype, "dom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dom_180" }),
        __metadata("design:type", Number)
    ], BaseListing.prototype, "dom180", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dom_active" }),
        __metadata("design:type", Number)
    ], BaseListing.prototype, "domActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exterior_color" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "exteriorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=financing_options", elemType: ListingFinance }),
        __metadata("design:type", Array)
    ], BaseListing.prototype, "financingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_seen_at" }),
        __metadata("design:type", Number)
    ], BaseListing.prototype, "firstSeenAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_seen_at_date" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "firstSeenAtDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heading" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "heading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interior_color" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "interiorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventory_type" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "inventoryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_certified" }),
        __metadata("design:type", Number)
    ], BaseListing.prototype, "isCertified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_seen_at" }),
        __metadata("design:type", Number)
    ], BaseListing.prototype, "lastSeenAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_seen_at_date" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "lastSeenAtDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leasing_options", elemType: ListingLease }),
        __metadata("design:type", Array)
    ], BaseListing.prototype, "leasingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=media" }),
        __metadata("design:type", ListingNestMedia)
    ], BaseListing.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=miles" }),
        __metadata("design:type", Number)
    ], BaseListing.prototype, "miles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model_code" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "modelCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=msrp" }),
        __metadata("design:type", Number)
    ], BaseListing.prototype, "msrp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], BaseListing.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref_miles" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "refMiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref_miles_dt" }),
        __metadata("design:type", Number)
    ], BaseListing.prototype, "refMilesDt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref_price" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "refPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref_price_dt" }),
        __metadata("design:type", Number)
    ], BaseListing.prototype, "refPriceDt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scraped_at" }),
        __metadata("design:type", Number)
    ], BaseListing.prototype, "scrapedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scraped_at_date" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "scrapedAtDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seller_type" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "sellerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stock_no" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "stockNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vdp_url" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "vdpUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vin" }),
        __metadata("design:type", String)
    ], BaseListing.prototype, "vin", void 0);
    return BaseListing;
}(SpeakeasyBase));
export { BaseListing };
