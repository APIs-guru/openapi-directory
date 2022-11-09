import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// User
/** 
 * A user belonging to an enterprise.
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountIdentifier" })
  accountIdentifier?: string;
}
