import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppConfigGeneral extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=defaultTimeZone" })
  defaultTimeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=facebookAppId" })
  facebookAppId?: string;

  @SpeakeasyMetadata({ data: "json, name=gaToken" })
  gaToken?: string;

  @SpeakeasyMetadata({ data: "json, name=itemImageTypes" })
  itemImageTypes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mandatorySignIn" })
  mandatorySignIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxUserRating" })
  maxUserRating?: number;

  @SpeakeasyMetadata({ data: "json, name=stripeKey" })
  stripeKey?: string;

  @SpeakeasyMetadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
