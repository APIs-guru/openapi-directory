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
import { CardSettings } from "./cardsettings";
import { CtaSettings } from "./ctasettings";
import { CustomSettings } from "./customsettings";
import { IntegrationSettings } from "./integrationsettings";
import { LeadFormSettings } from "./leadformsettings";
import { ListingSettings } from "./listingsettings";
import { MastheadSettings } from "./mastheadsettings";
import { MetaTagSettings } from "./metatagsettings";
export var EcosystemMenuPositionEnum;
(function (EcosystemMenuPositionEnum) {
    EcosystemMenuPositionEnum["Top"] = "TOP";
    EcosystemMenuPositionEnum["Left"] = "LEFT";
    EcosystemMenuPositionEnum["Right"] = "RIGHT";
    EcosystemMenuPositionEnum["Hidden"] = "HIDDEN";
})(EcosystemMenuPositionEnum || (EcosystemMenuPositionEnum = {}));
export var EcosystemMenuStyleEnum;
(function (EcosystemMenuStyleEnum) {
    EcosystemMenuStyleEnum["List"] = "LIST";
    EcosystemMenuStyleEnum["Pill"] = "PILL";
    EcosystemMenuStyleEnum["Filter"] = "FILTER";
})(EcosystemMenuStyleEnum || (EcosystemMenuStyleEnum = {}));
export var EcosystemNavigationMobileMenuTypeEnum;
(function (EcosystemNavigationMobileMenuTypeEnum) {
    EcosystemNavigationMobileMenuTypeEnum["Icon"] = "ICON";
    EcosystemNavigationMobileMenuTypeEnum["Text"] = "TEXT";
})(EcosystemNavigationMobileMenuTypeEnum || (EcosystemNavigationMobileMenuTypeEnum = {}));
var Ecosystem = /** @class */ (function (_super) {
    __extends(Ecosystem, _super);
    function Ecosystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=about" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "about", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternatives_background_color" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "alternativesBackgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternatives_color" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "alternativesColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribution" }),
        __metadata("design:type", Boolean)
    ], Ecosystem.prototype, "attribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_background_color" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "bodyBackgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_button_background_color" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "bodyButtonBackgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_button_color" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "bodyButtonColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_color" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "bodyColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_link_color" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "bodyLinkColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_settings" }),
        __metadata("design:type", CardSettings)
    ], Ecosystem.prototype, "cardSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories_count_badge" }),
        __metadata("design:type", Boolean)
    ], Ecosystem.prototype, "categoriesCountBadge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories_show_max_items" }),
        __metadata("design:type", Number)
    ], Ecosystem.prototype, "categoriesShowMaxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collections_count_badge" }),
        __metadata("design:type", Boolean)
    ], Ecosystem.prototype, "collectionsCountBadge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collections_title" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "collectionsTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=create_link" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "createLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Ecosystem.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cta_settings" }),
        __metadata("design:type", CtaSettings)
    ], Ecosystem.prototype, "ctaSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_domain" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "customDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_settings" }),
        __metadata("design:type", CustomSettings)
    ], Ecosystem.prototype, "customSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail_pages_enabled" }),
        __metadata("design:type", Boolean)
    ], Ecosystem.prototype, "detailPagesEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footer_background_color" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "footerBackgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footer_color" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "footerColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=google_site_verification_id" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "googleSiteVerificationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hide_install_buttons" }),
        __metadata("design:type", Boolean)
    ], Ecosystem.prototype, "hideInstallButtons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=home_page_collection_category_cards" }),
        __metadata("design:type", Boolean)
    ], Ecosystem.prototype, "homePageCollectionCategoryCards", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=home_page_show_all_listings" }),
        __metadata("design:type", Boolean)
    ], Ecosystem.prototype, "homePageShowAllListings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installation_request_flow_enabled" }),
        __metadata("design:type", Boolean)
    ], Ecosystem.prototype, "installationRequestFlowEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integration_settings" }),
        __metadata("design:type", IntegrationSettings)
    ], Ecosystem.prototype, "integrationSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_published" }),
        __metadata("design:type", Boolean)
    ], Ecosystem.prototype, "isPublished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_form_settings" }),
        __metadata("design:type", LeadFormSettings)
    ], Ecosystem.prototype, "leadFormSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listing_settings" }),
        __metadata("design:type", ListingSettings)
    ], Ecosystem.prototype, "listingSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masthead_settings" }),
        __metadata("design:type", MastheadSettings)
    ], Ecosystem.prototype, "mastheadSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=menu_position" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "menuPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=menu_style" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "menuStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta_tag_settings" }),
        __metadata("design:type", MetaTagSettings)
    ], Ecosystem.prototype, "metaTagSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=navigation_background_color" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "navigationBackgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=navigation_color" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "navigationColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=navigation_logo_post_fix" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "navigationLogoPostFix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=navigation_mobile_menu_type" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "navigationMobileMenuType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=navigation_sticky" }),
        __metadata("design:type", Boolean)
    ], Ecosystem.prototype, "navigationSticky", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_color" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "primaryColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy_link" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "privacyLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_link" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "requestLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shadow_page_description" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "shadowPageDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shadow_pages_enabled" }),
        __metadata("design:type", Boolean)
    ], Ecosystem.prototype, "shadowPagesEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_attribution_badge" }),
        __metadata("design:type", Boolean)
    ], Ecosystem.prototype, "showAttributionBadge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_requested_listings" }),
        __metadata("design:type", Boolean)
    ], Ecosystem.prototype, "showRequestedListings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terms_link" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "termsLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_published_listings" }),
        __metadata("design:type", Number)
    ], Ecosystem.prototype, "totalPublishedListings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unify_application_id" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "unifyApplicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Ecosystem.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=utm_campaign" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "utmCampaign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "website", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zaps_menu_title" }),
        __metadata("design:type", String)
    ], Ecosystem.prototype, "zapsMenuTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zaps_page_enabled" }),
        __metadata("design:type", Boolean)
    ], Ecosystem.prototype, "zapsPageEnabled", void 0);
    return Ecosystem;
}(SpeakeasyBase));
export { Ecosystem };
