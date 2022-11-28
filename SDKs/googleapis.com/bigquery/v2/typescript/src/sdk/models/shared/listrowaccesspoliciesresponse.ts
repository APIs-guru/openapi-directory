import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RowAccessPolicy } from "./rowaccesspolicy";



// ListRowAccessPoliciesResponse
/** 
 * Response message for the ListRowAccessPolicies method.
**/
export class ListRowAccessPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rowAccessPolicies", elemType: RowAccessPolicy })
  rowAccessPolicies?: RowAccessPolicy[];
}
