import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomChannelTargetingInfo
/** 
 * The targeting information of this custom channel, if activated.
**/
export class CustomChannelTargetingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=adsAppearOn" })
  adsAppearOn?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=siteLanguage" })
  siteLanguage?: string;
}


export class CustomChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=targetingInfo" })
  targetingInfo?: CustomChannelTargetingInfo;
}
