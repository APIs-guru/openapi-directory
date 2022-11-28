import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessPolicy } from "./accesspolicy";



// ListAccessPoliciesResponse
/** 
 * A response to `ListAccessPoliciesRequest`.
**/
export class ListAccessPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPolicies", elemType: AccessPolicy })
  accessPolicies?: AccessPolicy[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
