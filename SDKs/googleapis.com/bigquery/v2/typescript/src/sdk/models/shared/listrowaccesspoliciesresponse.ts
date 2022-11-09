import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RowAccessPolicy } from "./rowaccesspolicy";


// ListRowAccessPoliciesResponse
/** 
 * Response message for the ListRowAccessPolicies method.
**/
export class ListRowAccessPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=rowAccessPolicies", elemType: shared.RowAccessPolicy })
  rowAccessPolicies?: RowAccessPolicy[];
}
