import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// User
/** 
 * A user belonging to an enterprise.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIdentifier" })
  accountIdentifier?: string;
}
