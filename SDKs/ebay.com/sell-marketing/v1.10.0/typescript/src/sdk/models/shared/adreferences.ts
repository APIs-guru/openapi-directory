import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdReference } from "./adreference";


// AdReferences
/** 
 * This type is a container for a list of ad IDs and their associated URIs.
**/
export class AdReferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=ads", elemType: shared.AdReference })
  ads?: AdReference[];
}
