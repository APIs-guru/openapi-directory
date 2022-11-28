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
import { File } from "./file";
import { Category } from "./category";
import { Collection } from "./collection";
import { Logo } from "./logo";
import { Media } from "./media";
import { Partner } from "./partner";
import { Product } from "./product";
import { Screenshot } from "./screenshot";
import { Translation } from "./translation";
var Listing = /** @class */ (function (_super) {
    __extends(Listing, _super);
    function Listing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automate_id" }),
        __metadata("design:type", String)
    ], Listing.prototype, "automateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blendr_id" }),
        __metadata("design:type", String)
    ], Listing.prototype, "blendrId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_background_color" }),
        __metadata("design:type", String)
    ], Listing.prototype, "cardBackgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_background_image" }),
        __metadata("design:type", File)
    ], Listing.prototype, "cardBackgroundImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories", elemType: Category }),
        __metadata("design:type", Array)
    ], Listing.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloud_service_id" }),
        __metadata("design:type", String)
    ], Listing.prototype, "cloudServiceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collections", elemType: Collection }),
        __metadata("design:type", Array)
    ], Listing.prototype, "collections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combidesk_id" }),
        __metadata("design:type", String)
    ], Listing.prototype, "combideskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Listing.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Listing.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail_page_disabled" }),
        __metadata("design:type", Boolean)
    ], Listing.prototype, "detailPageDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external_id" }),
        __metadata("design:type", String)
    ], Listing.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=features" }),
        __metadata("design:type", String)
    ], Listing.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Listing.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integromat_id" }),
        __metadata("design:type", String)
    ], Listing.prototype, "integromatId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo" }),
        __metadata("design:type", Logo)
    ], Listing.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=media", elemType: Media }),
        __metadata("design:type", Array)
    ], Listing.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta_tag_description" }),
        __metadata("design:type", String)
    ], Listing.prototype, "metaTagDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta_tag_keywords" }),
        __metadata("design:type", String)
    ], Listing.prototype, "metaTagKeywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta_tag_title" }),
        __metadata("design:type", String)
    ], Listing.prototype, "metaTagTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=microsoft_flow_id" }),
        __metadata("design:type", String)
    ], Listing.prototype, "microsoftFlowId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Listing.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=native_integration" }),
        __metadata("design:type", Boolean)
    ], Listing.prototype, "nativeIntegration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=native_integration_link" }),
        __metadata("design:type", String)
    ], Listing.prototype, "nativeIntegrationLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partner" }),
        __metadata("design:type", Partner)
    ], Listing.prototype, "partner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=piesync_id" }),
        __metadata("design:type", String)
    ], Listing.prototype, "piesyncId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricing" }),
        __metadata("design:type", String)
    ], Listing.prototype, "pricing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=products", elemType: Product }),
        __metadata("design:type", Array)
    ], Listing.prototype, "products", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published" }),
        __metadata("design:type", Boolean)
    ], Listing.prototype, "published", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published_at" }),
        __metadata("design:type", Date)
    ], Listing.prototype, "publishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screenshots", elemType: Screenshot }),
        __metadata("design:type", Array)
    ], Listing.prototype, "screenshots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segment_id" }),
        __metadata("design:type", String)
    ], Listing.prototype, "segmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], Listing.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sticky" }),
        __metadata("design:type", Boolean)
    ], Listing.prototype, "sticky", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag_line" }),
        __metadata("design:type", String)
    ], Listing.prototype, "tagLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=third_party_integration" }),
        __metadata("design:type", Boolean)
    ], Listing.prototype, "thirdPartyIntegration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=third_party_integration_link" }),
        __metadata("design:type", String)
    ], Listing.prototype, "thirdPartyIntegrationLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translations", elemType: Translation }),
        __metadata("design:type", Array)
    ], Listing.prototype, "translations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tray_io_id" }),
        __metadata("design:type", String)
    ], Listing.prototype, "trayIoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unify_connector_id" }),
        __metadata("design:type", String)
    ], Listing.prototype, "unifyConnectorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upcoming" }),
        __metadata("design:type", Boolean)
    ], Listing.prototype, "upcoming", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Listing.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zapier_id" }),
        __metadata("design:type", String)
    ], Listing.prototype, "zapierId", void 0);
    return Listing;
}(SpeakeasyBase));
export { Listing };
