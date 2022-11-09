import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserStorage
/** 
 * Describes the user volume for a WorkSpace bundle.
**/
export class UserStorage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Capacity" })
  capacity?: string;
}
