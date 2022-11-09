import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessPolicy } from "./accesspolicy";


// ListAccessPoliciesResponse
/** 
 * A response to `ListAccessPoliciesRequest`.
**/
export class ListAccessPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPolicies", elemType: shared.AccessPolicy })
  accessPolicies?: AccessPolicy[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
