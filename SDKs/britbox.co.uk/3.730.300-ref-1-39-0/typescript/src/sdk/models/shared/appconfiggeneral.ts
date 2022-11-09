import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppConfigGeneral extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=defaultTimeZone" })
  defaultTimeZone?: string;

  @Metadata({ data: "json, name=facebookAppId" })
  facebookAppId?: string;

  @Metadata({ data: "json, name=gaToken" })
  gaToken?: string;

  @Metadata({ data: "json, name=itemImageTypes" })
  itemImageTypes?: Map<string, string>;

  @Metadata({ data: "json, name=mandatorySignIn" })
  mandatorySignIn?: boolean;

  @Metadata({ data: "json, name=maxUserRating" })
  maxUserRating?: number;

  @Metadata({ data: "json, name=stripeKey" })
  stripeKey?: string;

  @Metadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
