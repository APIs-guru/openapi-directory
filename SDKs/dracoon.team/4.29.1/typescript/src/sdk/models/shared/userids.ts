import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserIds
/** 
 * List of user IDs
**/
export class UserIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: number[];
}
