package shared

type ListingSettingsNamingEnum string

const (
	ListingSettingsNamingEnumListing      ListingSettingsNamingEnum = "LISTING"
	ListingSettingsNamingEnumListings     ListingSettingsNamingEnum = "LISTINGS"
	ListingSettingsNamingEnumIntegrations ListingSettingsNamingEnum = "INTEGRATIONS"
	ListingSettingsNamingEnumApps         ListingSettingsNamingEnum = "APPS"
	ListingSettingsNamingEnumConnectors   ListingSettingsNamingEnum = "CONNECTORS"
	ListingSettingsNamingEnumDatasources  ListingSettingsNamingEnum = "DATASOURCES"
	ListingSettingsNamingEnumAddons       ListingSettingsNamingEnum = "ADDONS"
	ListingSettingsNamingEnumPlugins      ListingSettingsNamingEnum = "PLUGINS"
	ListingSettingsNamingEnumPartners     ListingSettingsNamingEnum = "PARTNERS"
	ListingSettingsNamingEnumChannels     ListingSettingsNamingEnum = "CHANNELS"
	ListingSettingsNamingEnumConnections  ListingSettingsNamingEnum = "CONNECTIONS"
	ListingSettingsNamingEnumExtensions   ListingSettingsNamingEnum = "EXTENSIONS"
)

type ListingSettingsSidebarPositionEnum string

const (
	ListingSettingsSidebarPositionEnumTop    ListingSettingsSidebarPositionEnum = "TOP"
	ListingSettingsSidebarPositionEnumLeft   ListingSettingsSidebarPositionEnum = "LEFT"
	ListingSettingsSidebarPositionEnumRight  ListingSettingsSidebarPositionEnum = "RIGHT"
	ListingSettingsSidebarPositionEnumHidden ListingSettingsSidebarPositionEnum = "HIDDEN"
)

type ListingSettings struct {
	DescriptionTextTemplate *string                             `json:"description_text_template"`
	DescriptionTitle        *string                             `json:"description_title"`
	FeaturesTextTemplate    *string                             `json:"features_text_template"`
	FeaturesTitle           *string                             `json:"features_title"`
	InstallButtonLabel      *string                             `json:"install_button_label"`
	NamePostfix             *string                             `json:"name_postfix"`
	Naming                  *ListingSettingsNamingEnum          `json:"naming"`
	NativeIntegrationLink   *string                             `json:"native_integration_link"`
	PricingDisabled         *bool                               `json:"pricing_disabled"`
	PricingTextTemplate     *string                             `json:"pricing_text_template"`
	PricingTitle            *string                             `json:"pricing_title"`
	SidebarPosition         *ListingSettingsSidebarPositionEnum `json:"sidebar_position"`
}
