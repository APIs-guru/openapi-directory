import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Policy } from "./policy";


// ListPoliciesResponse
/** 
 * Response to a request to list policies for a given enterprise.
**/
export class ListPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=policies", elemType: shared.Policy })
  policies?: Policy[];
}
