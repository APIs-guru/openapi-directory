import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ListingSettingsNamingEnum {
    Listing = "LISTING"
,    Listings = "LISTINGS"
,    Integrations = "INTEGRATIONS"
,    Apps = "APPS"
,    Connectors = "CONNECTORS"
,    Datasources = "DATASOURCES"
,    Addons = "ADDONS"
,    Plugins = "PLUGINS"
,    Partners = "PARTNERS"
,    Channels = "CHANNELS"
,    Connections = "CONNECTIONS"
,    Extensions = "EXTENSIONS"
}

export enum ListingSettingsSidebarPositionEnum {
    Top = "TOP"
,    Left = "LEFT"
,    Right = "RIGHT"
,    Hidden = "HIDDEN"
}


export class ListingSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=description_text_template" })
  descriptionTextTemplate?: string;

  @Metadata({ data: "json, name=description_title" })
  descriptionTitle?: string;

  @Metadata({ data: "json, name=features_text_template" })
  featuresTextTemplate?: string;

  @Metadata({ data: "json, name=features_title" })
  featuresTitle?: string;

  @Metadata({ data: "json, name=install_button_label" })
  installButtonLabel?: string;

  @Metadata({ data: "json, name=name_postfix" })
  namePostfix?: string;

  @Metadata({ data: "json, name=naming" })
  naming?: ListingSettingsNamingEnum;

  @Metadata({ data: "json, name=native_integration_link" })
  nativeIntegrationLink?: string;

  @Metadata({ data: "json, name=pricing_disabled" })
  pricingDisabled?: boolean;

  @Metadata({ data: "json, name=pricing_text_template" })
  pricingTextTemplate?: string;

  @Metadata({ data: "json, name=pricing_title" })
  pricingTitle?: string;

  @Metadata({ data: "json, name=sidebar_position" })
  sidebarPosition?: ListingSettingsSidebarPositionEnum;
}
