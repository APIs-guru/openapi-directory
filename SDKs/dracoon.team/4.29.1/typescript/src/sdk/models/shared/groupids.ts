import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupIds
/** 
 * List of group IDs
**/
export class GroupIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: number[];
}
