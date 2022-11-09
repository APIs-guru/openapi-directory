import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserIdentity
/** 
 * Contains information for a user identity in an access policy.
**/
export class UserIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}
