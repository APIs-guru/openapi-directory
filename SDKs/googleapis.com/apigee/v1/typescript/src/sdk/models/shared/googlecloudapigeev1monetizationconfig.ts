import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1MonetizationConfig
/** 
 * Configuration for the Monetization add-on.
**/
export class GoogleCloudApigeeV1MonetizationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
