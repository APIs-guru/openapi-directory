import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserIdFileIdItem
/** 
 * User ID and file ID mapping
**/
export class UserIdFileIdItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileId" })
  fileId?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: number;
}
