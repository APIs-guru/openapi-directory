import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChangeGroupMembersRequest
/** 
 * List of user IDs
**/
export class ChangeGroupMembersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: number[];
}
