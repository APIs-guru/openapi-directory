package shared

import (
	"time"
)

type EcosystemMenuPositionEnum string

const (
	EcosystemMenuPositionEnumTop    EcosystemMenuPositionEnum = "TOP"
	EcosystemMenuPositionEnumLeft   EcosystemMenuPositionEnum = "LEFT"
	EcosystemMenuPositionEnumRight  EcosystemMenuPositionEnum = "RIGHT"
	EcosystemMenuPositionEnumHidden EcosystemMenuPositionEnum = "HIDDEN"
)

type EcosystemMenuStyleEnum string

const (
	EcosystemMenuStyleEnumList   EcosystemMenuStyleEnum = "LIST"
	EcosystemMenuStyleEnumPill   EcosystemMenuStyleEnum = "PILL"
	EcosystemMenuStyleEnumFilter EcosystemMenuStyleEnum = "FILTER"
)

type EcosystemNavigationMobileMenuTypeEnum string

const (
	EcosystemNavigationMobileMenuTypeEnumIcon EcosystemNavigationMobileMenuTypeEnum = "ICON"
	EcosystemNavigationMobileMenuTypeEnumText EcosystemNavigationMobileMenuTypeEnum = "TEXT"
)

type Ecosystem struct {
	About                           *string                                `json:"about"`
	AlternativesBackgroundColor     *string                                `json:"alternatives_background_color"`
	AlternativesColor               *string                                `json:"alternatives_color"`
	Attribution                     *bool                                  `json:"attribution"`
	BodyBackgroundColor             *string                                `json:"body_background_color"`
	BodyButtonBackgroundColor       *string                                `json:"body_button_background_color"`
	BodyButtonColor                 *string                                `json:"body_button_color"`
	BodyColor                       *string                                `json:"body_color"`
	BodyLinkColor                   *string                                `json:"body_link_color"`
	CardSettings                    *CardSettings                          `json:"card_settings"`
	CategoriesCountBadge            *bool                                  `json:"categories_count_badge"`
	CategoriesShowMaxItems          *int64                                 `json:"categories_show_max_items"`
	CollectionsCountBadge           *bool                                  `json:"collections_count_badge"`
	CollectionsTitle                *string                                `json:"collections_title"`
	CreateLink                      *string                                `json:"create_link"`
	CreatedAt                       *time.Time                             `json:"created_at"`
	CtaSettings                     *CtaSettings                           `json:"cta_settings"`
	CustomDomain                    *string                                `json:"custom_domain"`
	CustomSettings                  *CustomSettings                        `json:"custom_settings"`
	DetailPagesEnabled              *bool                                  `json:"detail_pages_enabled"`
	FooterBackgroundColor           *string                                `json:"footer_background_color"`
	FooterColor                     *string                                `json:"footer_color"`
	GoogleSiteVerificationID        *string                                `json:"google_site_verification_id"`
	HideInstallButtons              *bool                                  `json:"hide_install_buttons"`
	HomePageCollectionCategoryCards *bool                                  `json:"home_page_collection_category_cards"`
	HomePageShowAllListings         *bool                                  `json:"home_page_show_all_listings"`
	ID                              *string                                `json:"id"`
	InstallationRequestFlowEnabled  *bool                                  `json:"installation_request_flow_enabled"`
	IntegrationSettings             *IntegrationSettings                   `json:"integration_settings"`
	IsPublished                     bool                                   `json:"is_published"`
	LeadFormSettings                *LeadFormSettings                      `json:"lead_form_settings"`
	ListingSettings                 *ListingSettings                       `json:"listing_settings"`
	MastheadSettings                *MastheadSettings                      `json:"masthead_settings"`
	MenuPosition                    *EcosystemMenuPositionEnum             `json:"menu_position"`
	MenuStyle                       *EcosystemMenuStyleEnum                `json:"menu_style"`
	MetaTagSettings                 *MetaTagSettings                       `json:"meta_tag_settings"`
	Name                            string                                 `json:"name"`
	NavigationBackgroundColor       *string                                `json:"navigation_background_color"`
	NavigationColor                 *string                                `json:"navigation_color"`
	NavigationLogoPostFix           *string                                `json:"navigation_logo_post_fix"`
	NavigationMobileMenuType        *EcosystemNavigationMobileMenuTypeEnum `json:"navigation_mobile_menu_type"`
	NavigationSticky                *bool                                  `json:"navigation_sticky"`
	PrimaryColor                    *string                                `json:"primary_color"`
	PrivacyLink                     *string                                `json:"privacy_link"`
	RequestLink                     *string                                `json:"request_link"`
	ShadowPageDescription           *string                                `json:"shadow_page_description"`
	ShadowPagesEnabled              *bool                                  `json:"shadow_pages_enabled"`
	ShowAttributionBadge            *bool                                  `json:"show_attribution_badge"`
	ShowRequestedListings           *bool                                  `json:"show_requested_listings"`
	Slug                            string                                 `json:"slug"`
	TermsLink                       *string                                `json:"terms_link"`
	TotalPublishedListings          *int64                                 `json:"total_published_listings"`
	UnifyApplicationID              *string                                `json:"unify_application_id"`
	UpdatedAt                       *time.Time                             `json:"updated_at"`
	UtmCampaign                     *string                                `json:"utm_campaign"`
	Website                         *string                                `json:"website"`
	ZapsMenuTitle                   *string                                `json:"zaps_menu_title"`
	ZapsPageEnabled                 *bool                                  `json:"zaps_page_enabled"`
}
