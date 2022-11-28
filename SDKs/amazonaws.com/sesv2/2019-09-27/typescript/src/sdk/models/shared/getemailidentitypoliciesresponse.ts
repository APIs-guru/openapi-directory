import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetEmailIdentityPoliciesResponse
/** 
 * Identity policies associated with email identity.
**/
export class GetEmailIdentityPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policies" })
  policies?: Map<string, string>;
}
