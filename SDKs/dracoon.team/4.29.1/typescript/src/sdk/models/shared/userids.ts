import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserIds
/** 
 * List of user IDs
**/
export class UserIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: number[];
}
