import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ListingSettingsNamingEnum {
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

export enum ListingSettingsSidebarPositionEnum {
    Top = "TOP",
    Left = "LEFT",
    Right = "RIGHT",
    Hidden = "HIDDEN"
}


export class ListingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description_text_template" })
  descriptionTextTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=description_title" })
  descriptionTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=features_text_template" })
  featuresTextTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=features_title" })
  featuresTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=install_button_label" })
  installButtonLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=name_postfix" })
  namePostfix?: string;

  @SpeakeasyMetadata({ data: "json, name=naming" })
  naming?: ListingSettingsNamingEnum;

  @SpeakeasyMetadata({ data: "json, name=native_integration_link" })
  nativeIntegrationLink?: string;

  @SpeakeasyMetadata({ data: "json, name=pricing_disabled" })
  pricingDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pricing_text_template" })
  pricingTextTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=pricing_title" })
  pricingTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=sidebar_position" })
  sidebarPosition?: ListingSettingsSidebarPositionEnum;
}
