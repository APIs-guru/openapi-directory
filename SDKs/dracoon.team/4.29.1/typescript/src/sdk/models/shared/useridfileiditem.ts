import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserIdFileIdItem
/** 
 * User ID and file ID mapping
**/
export class UserIdFileIdItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileId" })
  fileId?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: number;
}
