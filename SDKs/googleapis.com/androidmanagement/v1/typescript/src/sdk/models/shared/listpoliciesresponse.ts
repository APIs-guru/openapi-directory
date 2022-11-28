import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";



// ListPoliciesResponse
/** 
 * Response to a request to list policies for a given enterprise.
**/
export class ListPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=policies", elemType: Policy })
  policies?: Policy[];
}
