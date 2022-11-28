import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomChannelTargetingInfo
/** 
 * The targeting information of this custom channel, if activated.
**/
export class CustomChannelTargetingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adsAppearOn" })
  adsAppearOn?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=siteLanguage" })
  siteLanguage?: string;
}


export class CustomChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=targetingInfo" })
  targetingInfo?: CustomChannelTargetingInfo;
}
