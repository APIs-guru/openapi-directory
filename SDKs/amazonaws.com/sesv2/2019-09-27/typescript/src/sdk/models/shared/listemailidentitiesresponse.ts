import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityInfo } from "./identityinfo";



// ListEmailIdentitiesResponse
/** 
 * A list of all of the identities that you've attempted to verify, regardless of whether or not those identities were successfully verified.
**/
export class ListEmailIdentitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmailIdentities", elemType: IdentityInfo })
  emailIdentities?: IdentityInfo[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
