import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserIdentity
/** 
 * Contains information for a user identity in an access policy.
**/
export class UserIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
