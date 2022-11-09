import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupIds
/** 
 * List of group IDs
**/
export class GroupIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: number[];
}
