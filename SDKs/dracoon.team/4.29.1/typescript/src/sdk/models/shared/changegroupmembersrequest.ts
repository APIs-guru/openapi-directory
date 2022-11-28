import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChangeGroupMembersRequest
/** 
 * List of user IDs
**/
export class ChangeGroupMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: number[];
}
