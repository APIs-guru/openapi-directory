import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CardSettings } from "./cardsettings";
import { CtaSettings } from "./ctasettings";
import { CustomSettings } from "./customsettings";
import { IntegrationSettings } from "./integrationsettings";
import { LeadFormSettings } from "./leadformsettings";
import { ListingSettings } from "./listingsettings";
import { MastheadSettings } from "./mastheadsettings";
import { MetaTagSettings } from "./metatagsettings";

export enum EcosystemMenuPositionEnum {
    Top = "TOP"
,    Left = "LEFT"
,    Right = "RIGHT"
,    Hidden = "HIDDEN"
}

export enum EcosystemMenuStyleEnum {
    List = "LIST"
,    Pill = "PILL"
,    Filter = "FILTER"
}

export enum EcosystemNavigationMobileMenuTypeEnum {
    Icon = "ICON"
,    Text = "TEXT"
}


export class Ecosystem extends SpeakeasyBase {
  @Metadata({ data: "json, name=about" })
  about?: string;

  @Metadata({ data: "json, name=alternatives_background_color" })
  alternativesBackgroundColor?: string;

  @Metadata({ data: "json, name=alternatives_color" })
  alternativesColor?: string;

  @Metadata({ data: "json, name=attribution" })
  attribution?: boolean;

  @Metadata({ data: "json, name=body_background_color" })
  bodyBackgroundColor?: string;

  @Metadata({ data: "json, name=body_button_background_color" })
  bodyButtonBackgroundColor?: string;

  @Metadata({ data: "json, name=body_button_color" })
  bodyButtonColor?: string;

  @Metadata({ data: "json, name=body_color" })
  bodyColor?: string;

  @Metadata({ data: "json, name=body_link_color" })
  bodyLinkColor?: string;

  @Metadata({ data: "json, name=card_settings" })
  cardSettings?: CardSettings;

  @Metadata({ data: "json, name=categories_count_badge" })
  categoriesCountBadge?: boolean;

  @Metadata({ data: "json, name=categories_show_max_items" })
  categoriesShowMaxItems?: number;

  @Metadata({ data: "json, name=collections_count_badge" })
  collectionsCountBadge?: boolean;

  @Metadata({ data: "json, name=collections_title" })
  collectionsTitle?: string;

  @Metadata({ data: "json, name=create_link" })
  createLink?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=cta_settings" })
  ctaSettings?: CtaSettings;

  @Metadata({ data: "json, name=custom_domain" })
  customDomain?: string;

  @Metadata({ data: "json, name=custom_settings" })
  customSettings?: CustomSettings;

  @Metadata({ data: "json, name=detail_pages_enabled" })
  detailPagesEnabled?: boolean;

  @Metadata({ data: "json, name=footer_background_color" })
  footerBackgroundColor?: string;

  @Metadata({ data: "json, name=footer_color" })
  footerColor?: string;

  @Metadata({ data: "json, name=google_site_verification_id" })
  googleSiteVerificationId?: string;

  @Metadata({ data: "json, name=hide_install_buttons" })
  hideInstallButtons?: boolean;

  @Metadata({ data: "json, name=home_page_collection_category_cards" })
  homePageCollectionCategoryCards?: boolean;

  @Metadata({ data: "json, name=home_page_show_all_listings" })
  homePageShowAllListings?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=installation_request_flow_enabled" })
  installationRequestFlowEnabled?: boolean;

  @Metadata({ data: "json, name=integration_settings" })
  integrationSettings?: IntegrationSettings;

  @Metadata({ data: "json, name=is_published" })
  isPublished: boolean;

  @Metadata({ data: "json, name=lead_form_settings" })
  leadFormSettings?: LeadFormSettings;

  @Metadata({ data: "json, name=listing_settings" })
  listingSettings?: ListingSettings;

  @Metadata({ data: "json, name=masthead_settings" })
  mastheadSettings?: MastheadSettings;

  @Metadata({ data: "json, name=menu_position" })
  menuPosition?: EcosystemMenuPositionEnum;

  @Metadata({ data: "json, name=menu_style" })
  menuStyle?: EcosystemMenuStyleEnum;

  @Metadata({ data: "json, name=meta_tag_settings" })
  metaTagSettings?: MetaTagSettings;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=navigation_background_color" })
  navigationBackgroundColor?: string;

  @Metadata({ data: "json, name=navigation_color" })
  navigationColor?: string;

  @Metadata({ data: "json, name=navigation_logo_post_fix" })
  navigationLogoPostFix?: string;

  @Metadata({ data: "json, name=navigation_mobile_menu_type" })
  navigationMobileMenuType?: EcosystemNavigationMobileMenuTypeEnum;

  @Metadata({ data: "json, name=navigation_sticky" })
  navigationSticky?: boolean;

  @Metadata({ data: "json, name=primary_color" })
  primaryColor?: string;

  @Metadata({ data: "json, name=privacy_link" })
  privacyLink?: string;

  @Metadata({ data: "json, name=request_link" })
  requestLink?: string;

  @Metadata({ data: "json, name=shadow_page_description" })
  shadowPageDescription?: string;

  @Metadata({ data: "json, name=shadow_pages_enabled" })
  shadowPagesEnabled?: boolean;

  @Metadata({ data: "json, name=show_attribution_badge" })
  showAttributionBadge?: boolean;

  @Metadata({ data: "json, name=show_requested_listings" })
  showRequestedListings?: boolean;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=terms_link" })
  termsLink?: string;

  @Metadata({ data: "json, name=total_published_listings" })
  totalPublishedListings?: number;

  @Metadata({ data: "json, name=unify_application_id" })
  unifyApplicationId?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=utm_campaign" })
  utmCampaign?: string;

  @Metadata({ data: "json, name=website" })
  website?: string;

  @Metadata({ data: "json, name=zaps_menu_title" })
  zapsMenuTitle?: string;

  @Metadata({ data: "json, name=zaps_page_enabled" })
  zapsPageEnabled?: boolean;
}
