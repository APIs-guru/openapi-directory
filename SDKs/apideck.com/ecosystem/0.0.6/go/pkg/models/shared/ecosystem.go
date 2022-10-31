package shared

import (
"time")


type EcosystemMenuPositionEnum string

const (
    EcosystemMenuPositionEnumTop EcosystemMenuPositionEnum = "TOP"
EcosystemMenuPositionEnumLeft EcosystemMenuPositionEnum = "LEFT"
EcosystemMenuPositionEnumRight EcosystemMenuPositionEnum = "RIGHT"
EcosystemMenuPositionEnumHidden EcosystemMenuPositionEnum = "HIDDEN"
)



type EcosystemMenuStyleEnum string

const (
    EcosystemMenuStyleEnumList EcosystemMenuStyleEnum = "LIST"
EcosystemMenuStyleEnumPill EcosystemMenuStyleEnum = "PILL"
EcosystemMenuStyleEnumFilter EcosystemMenuStyleEnum = "FILTER"
)



type EcosystemNavigationMobileMenuTypeEnum string

const (
    EcosystemNavigationMobileMenuTypeEnumIcon EcosystemNavigationMobileMenuTypeEnum = "ICON"
EcosystemNavigationMobileMenuTypeEnumText EcosystemNavigationMobileMenuTypeEnum = "TEXT"
)


type Ecosystem struct {
    About *string `json:"about,omitempty"`
    AlternativesBackgroundColor *string `json:"alternatives_background_color,omitempty"`
    AlternativesColor *string `json:"alternatives_color,omitempty"`
    Attribution *bool `json:"attribution,omitempty"`
    BodyBackgroundColor *string `json:"body_background_color,omitempty"`
    BodyButtonBackgroundColor *string `json:"body_button_background_color,omitempty"`
    BodyButtonColor *string `json:"body_button_color,omitempty"`
    BodyColor *string `json:"body_color,omitempty"`
    BodyLinkColor *string `json:"body_link_color,omitempty"`
    CardSettings *CardSettings `json:"card_settings,omitempty"`
    CategoriesCountBadge *bool `json:"categories_count_badge,omitempty"`
    CategoriesShowMaxItems *int64 `json:"categories_show_max_items,omitempty"`
    CollectionsCountBadge *bool `json:"collections_count_badge,omitempty"`
    CollectionsTitle *string `json:"collections_title,omitempty"`
    CreateLink *string `json:"create_link,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CtaSettings *CtaSettings `json:"cta_settings,omitempty"`
    CustomDomain *string `json:"custom_domain,omitempty"`
    CustomSettings *CustomSettings `json:"custom_settings,omitempty"`
    DetailPagesEnabled *bool `json:"detail_pages_enabled,omitempty"`
    FooterBackgroundColor *string `json:"footer_background_color,omitempty"`
    FooterColor *string `json:"footer_color,omitempty"`
    GoogleSiteVerificationID *string `json:"google_site_verification_id,omitempty"`
    HideInstallButtons *bool `json:"hide_install_buttons,omitempty"`
    HomePageCollectionCategoryCards *bool `json:"home_page_collection_category_cards,omitempty"`
    HomePageShowAllListings *bool `json:"home_page_show_all_listings,omitempty"`
    ID *string `json:"id,omitempty"`
    InstallationRequestFlowEnabled *bool `json:"installation_request_flow_enabled,omitempty"`
    IntegrationSettings *IntegrationSettings `json:"integration_settings,omitempty"`
    IsPublished bool `json:"is_published"`
    LeadFormSettings *LeadFormSettings `json:"lead_form_settings,omitempty"`
    ListingSettings *ListingSettings `json:"listing_settings,omitempty"`
    MastheadSettings *MastheadSettings `json:"masthead_settings,omitempty"`
    MenuPosition *EcosystemMenuPositionEnum `json:"menu_position,omitempty"`
    MenuStyle *EcosystemMenuStyleEnum `json:"menu_style,omitempty"`
    MetaTagSettings *MetaTagSettings `json:"meta_tag_settings,omitempty"`
    Name string `json:"name"`
    NavigationBackgroundColor *string `json:"navigation_background_color,omitempty"`
    NavigationColor *string `json:"navigation_color,omitempty"`
    NavigationLogoPostFix *string `json:"navigation_logo_post_fix,omitempty"`
    NavigationMobileMenuType *EcosystemNavigationMobileMenuTypeEnum `json:"navigation_mobile_menu_type,omitempty"`
    NavigationSticky *bool `json:"navigation_sticky,omitempty"`
    PrimaryColor *string `json:"primary_color,omitempty"`
    PrivacyLink *string `json:"privacy_link,omitempty"`
    RequestLink *string `json:"request_link,omitempty"`
    ShadowPageDescription *string `json:"shadow_page_description,omitempty"`
    ShadowPagesEnabled *bool `json:"shadow_pages_enabled,omitempty"`
    ShowAttributionBadge *bool `json:"show_attribution_badge,omitempty"`
    ShowRequestedListings *bool `json:"show_requested_listings,omitempty"`
    Slug string `json:"slug"`
    TermsLink *string `json:"terms_link,omitempty"`
    TotalPublishedListings *int64 `json:"total_published_listings,omitempty"`
    UnifyApplicationID *string `json:"unify_application_id,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    UtmCampaign *string `json:"utm_campaign,omitempty"`
    Website *string `json:"website,omitempty"`
    ZapsMenuTitle *string `json:"zaps_menu_title,omitempty"`
    ZapsPageEnabled *bool `json:"zaps_page_enabled,omitempty"`
    
}

