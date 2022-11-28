import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// V2IosKeyRestrictions
/** 
 * The iOS apps that are allowed to use the key.
**/
export class V2IosKeyRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedBundleIds" })
  allowedBundleIds?: string[];
}
