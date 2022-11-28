import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdReference } from "./adreference";



// AdReferences
/** 
 * This type is a container for a list of ad IDs and their associated URIs.
**/
export class AdReferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ads", elemType: AdReference })
  ads?: AdReference[];
}
