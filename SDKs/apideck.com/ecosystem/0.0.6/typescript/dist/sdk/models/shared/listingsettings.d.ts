import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ListingSettingsNamingEnum {
    Listing = "LISTING",
    Listings = "LISTINGS",
    Integrations = "INTEGRATIONS",
    Apps = "APPS",
    Connectors = "CONNECTORS",
    Datasources = "DATASOURCES",
    Addons = "ADDONS",
    Plugins = "PLUGINS",
    Partners = "PARTNERS",
    Channels = "CHANNELS",
    Connections = "CONNECTIONS",
    Extensions = "EXTENSIONS"
}
export declare enum ListingSettingsSidebarPositionEnum {
    Top = "TOP",
    Left = "LEFT",
    Right = "RIGHT",
    Hidden = "HIDDEN"
}
export declare class ListingSettings extends SpeakeasyBase {
    descriptionTextTemplate?: string;
    descriptionTitle?: string;
    featuresTextTemplate?: string;
    featuresTitle?: string;
    installButtonLabel?: string;
    namePostfix?: string;
    naming?: ListingSettingsNamingEnum;
    nativeIntegrationLink?: string;
    pricingDisabled?: boolean;
    pricingTextTemplate?: string;
    pricingTitle?: string;
    sidebarPosition?: ListingSettingsSidebarPositionEnum;
}
