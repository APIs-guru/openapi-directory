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
	DescriptionTextTemplate *string                             `json:"description_text_template,omitempty"`
	DescriptionTitle        *string                             `json:"description_title,omitempty"`
	FeaturesTextTemplate    *string                             `json:"features_text_template,omitempty"`
	FeaturesTitle           *string                             `json:"features_title,omitempty"`
	InstallButtonLabel      *string                             `json:"install_button_label,omitempty"`
	NamePostfix             *string                             `json:"name_postfix,omitempty"`
	Naming                  *ListingSettingsNamingEnum          `json:"naming,omitempty"`
	NativeIntegrationLink   *string                             `json:"native_integration_link,omitempty"`
	PricingDisabled         *bool                               `json:"pricing_disabled,omitempty"`
	PricingTextTemplate     *string                             `json:"pricing_text_template,omitempty"`
	PricingTitle            *string                             `json:"pricing_title,omitempty"`
	SidebarPosition         *ListingSettingsSidebarPositionEnum `json:"sidebar_position,omitempty"`
}
