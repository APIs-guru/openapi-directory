import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdIds
/** 
 * This type is a container for a list of ad IDs.
**/
export class AdIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adIds" })
  adIds?: string[];
}
