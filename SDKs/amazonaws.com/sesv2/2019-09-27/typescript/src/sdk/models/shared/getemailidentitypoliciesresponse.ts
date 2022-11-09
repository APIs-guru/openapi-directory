import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetEmailIdentityPoliciesResponse
/** 
 * Identity policies associated with email identity.
**/
export class GetEmailIdentityPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policies" })
  policies?: Map<string, string>;
}
