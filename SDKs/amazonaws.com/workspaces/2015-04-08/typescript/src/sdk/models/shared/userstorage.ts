import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserStorage
/** 
 * Describes the user volume for a WorkSpace bundle.
**/
export class UserStorage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Capacity" })
  capacity?: string;
}
