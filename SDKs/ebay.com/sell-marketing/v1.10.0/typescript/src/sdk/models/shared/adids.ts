import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdIds
/** 
 * This type is a container for a list of ad IDs.
**/
export class AdIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=adIds" })
  adIds?: string[];
}
