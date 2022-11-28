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
import { MotorcycleBuild } from "./motorcyclebuild";
import { NestDealer } from "./nestdealer";
import { ListingNestMedia } from "./listingnestmedia";
// MotorcycleBaseListing
/**
 * Base motorcycle listing
**/
var MotorcycleBaseListing = /** @class */ (function (_super) {
    __extends(MotorcycleBaseListing, _super);
    function MotorcycleBaseListing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build" }),
        __metadata("design:type", MotorcycleBuild)
    ], MotorcycleBaseListing.prototype, "build", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], MotorcycleBaseListing.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealer" }),
        __metadata("design:type", NestDealer)
    ], MotorcycleBaseListing.prototype, "dealer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dist" }),
        __metadata("design:type", Number)
    ], MotorcycleBaseListing.prototype, "dist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dp_url" }),
        __metadata("design:type", String)
    ], MotorcycleBaseListing.prototype, "dpUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_seen_at" }),
        __metadata("design:type", Number)
    ], MotorcycleBaseListing.prototype, "firstSeenAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_seen_at_date" }),
        __metadata("design:type", String)
    ], MotorcycleBaseListing.prototype, "firstSeenAtDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heading" }),
        __metadata("design:type", String)
    ], MotorcycleBaseListing.prototype, "heading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MotorcycleBaseListing.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventory_type" }),
        __metadata("design:type", String)
    ], MotorcycleBaseListing.prototype, "inventoryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_seen_at" }),
        __metadata("design:type", Number)
    ], MotorcycleBaseListing.prototype, "lastSeenAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_seen_at_date" }),
        __metadata("design:type", String)
    ], MotorcycleBaseListing.prototype, "lastSeenAtDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=media" }),
        __metadata("design:type", ListingNestMedia)
    ], MotorcycleBaseListing.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=miles" }),
        __metadata("design:type", Number)
    ], MotorcycleBaseListing.prototype, "miles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=msrp" }),
        __metadata("design:type", Number)
    ], MotorcycleBaseListing.prototype, "msrp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], MotorcycleBaseListing.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scraped_at" }),
        __metadata("design:type", Number)
    ], MotorcycleBaseListing.prototype, "scrapedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scraped_at_date" }),
        __metadata("design:type", String)
    ], MotorcycleBaseListing.prototype, "scrapedAtDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seller_type" }),
        __metadata("design:type", String)
    ], MotorcycleBaseListing.prototype, "sellerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], MotorcycleBaseListing.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stock_no" }),
        __metadata("design:type", String)
    ], MotorcycleBaseListing.prototype, "stockNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vin" }),
        __metadata("design:type", String)
    ], MotorcycleBaseListing.prototype, "vin", void 0);
    return MotorcycleBaseListing;
}(SpeakeasyBase));
export { MotorcycleBaseListing };
