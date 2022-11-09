import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IdentityInfo } from "./identityinfo";


// ListEmailIdentitiesResponse
/** 
 * A list of all of the identities that you've attempted to verify, regardless of whether or not those identities were successfully verified.
**/
export class ListEmailIdentitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmailIdentities", elemType: shared.IdentityInfo })
  emailIdentities?: IdentityInfo[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
