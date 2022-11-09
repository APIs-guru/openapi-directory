import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// V2IosKeyRestrictions
/** 
 * The iOS apps that are allowed to use the key.
**/
export class V2IosKeyRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedBundleIds" })
  allowedBundleIds?: string[];
}
