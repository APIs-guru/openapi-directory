import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CardSettings } from "./cardsettings";
import { CtaSettings } from "./ctasettings";
import { CustomSettings } from "./customsettings";
import { IntegrationSettings } from "./integrationsettings";
import { LeadFormSettings } from "./leadformsettings";
import { ListingSettings } from "./listingsettings";
import { MastheadSettings } from "./mastheadsettings";
import { MetaTagSettings } from "./metatagsettings";


export enum EcosystemMenuPositionEnum {
    Top = "TOP",
    Left = "LEFT",
    Right = "RIGHT",
    Hidden = "HIDDEN"
}

export enum EcosystemMenuStyleEnum {
    List = "LIST",
    Pill = "PILL",
    Filter = "FILTER"
}

export enum EcosystemNavigationMobileMenuTypeEnum {
    Icon = "ICON",
    Text = "TEXT"
}


export class Ecosystem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=about" })
  about?: string;

  @SpeakeasyMetadata({ data: "json, name=alternatives_background_color" })
  alternativesBackgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=alternatives_color" })
  alternativesColor?: string;

  @SpeakeasyMetadata({ data: "json, name=attribution" })
  attribution?: boolean;

  @SpeakeasyMetadata({ data: "json, name=body_background_color" })
  bodyBackgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=body_button_background_color" })
  bodyButtonBackgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=body_button_color" })
  bodyButtonColor?: string;

  @SpeakeasyMetadata({ data: "json, name=body_color" })
  bodyColor?: string;

  @SpeakeasyMetadata({ data: "json, name=body_link_color" })
  bodyLinkColor?: string;

  @SpeakeasyMetadata({ data: "json, name=card_settings" })
  cardSettings?: CardSettings;

  @SpeakeasyMetadata({ data: "json, name=categories_count_badge" })
  categoriesCountBadge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=categories_show_max_items" })
  categoriesShowMaxItems?: number;

  @SpeakeasyMetadata({ data: "json, name=collections_count_badge" })
  collectionsCountBadge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=collections_title" })
  collectionsTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=create_link" })
  createLink?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=cta_settings" })
  ctaSettings?: CtaSettings;

  @SpeakeasyMetadata({ data: "json, name=custom_domain" })
  customDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_settings" })
  customSettings?: CustomSettings;

  @SpeakeasyMetadata({ data: "json, name=detail_pages_enabled" })
  detailPagesEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=footer_background_color" })
  footerBackgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=footer_color" })
  footerColor?: string;

  @SpeakeasyMetadata({ data: "json, name=google_site_verification_id" })
  googleSiteVerificationId?: string;

  @SpeakeasyMetadata({ data: "json, name=hide_install_buttons" })
  hideInstallButtons?: boolean;

  @SpeakeasyMetadata({ data: "json, name=home_page_collection_category_cards" })
  homePageCollectionCategoryCards?: boolean;

  @SpeakeasyMetadata({ data: "json, name=home_page_show_all_listings" })
  homePageShowAllListings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=installation_request_flow_enabled" })
  installationRequestFlowEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=integration_settings" })
  integrationSettings?: IntegrationSettings;

  @SpeakeasyMetadata({ data: "json, name=is_published" })
  isPublished: boolean;

  @SpeakeasyMetadata({ data: "json, name=lead_form_settings" })
  leadFormSettings?: LeadFormSettings;

  @SpeakeasyMetadata({ data: "json, name=listing_settings" })
  listingSettings?: ListingSettings;

  @SpeakeasyMetadata({ data: "json, name=masthead_settings" })
  mastheadSettings?: MastheadSettings;

  @SpeakeasyMetadata({ data: "json, name=menu_position" })
  menuPosition?: EcosystemMenuPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=menu_style" })
  menuStyle?: EcosystemMenuStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=meta_tag_settings" })
  metaTagSettings?: MetaTagSettings;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=navigation_background_color" })
  navigationBackgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=navigation_color" })
  navigationColor?: string;

  @SpeakeasyMetadata({ data: "json, name=navigation_logo_post_fix" })
  navigationLogoPostFix?: string;

  @SpeakeasyMetadata({ data: "json, name=navigation_mobile_menu_type" })
  navigationMobileMenuType?: EcosystemNavigationMobileMenuTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=navigation_sticky" })
  navigationSticky?: boolean;

  @SpeakeasyMetadata({ data: "json, name=primary_color" })
  primaryColor?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy_link" })
  privacyLink?: string;

  @SpeakeasyMetadata({ data: "json, name=request_link" })
  requestLink?: string;

  @SpeakeasyMetadata({ data: "json, name=shadow_page_description" })
  shadowPageDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=shadow_pages_enabled" })
  shadowPagesEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_attribution_badge" })
  showAttributionBadge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_requested_listings" })
  showRequestedListings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=terms_link" })
  termsLink?: string;

  @SpeakeasyMetadata({ data: "json, name=total_published_listings" })
  totalPublishedListings?: number;

  @SpeakeasyMetadata({ data: "json, name=unify_application_id" })
  unifyApplicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=utm_campaign" })
  utmCampaign?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;

  @SpeakeasyMetadata({ data: "json, name=zaps_menu_title" })
  zapsMenuTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=zaps_page_enabled" })
  zapsPageEnabled?: boolean;
}
