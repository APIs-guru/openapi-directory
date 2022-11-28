import { SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
/**
 * Response to a request to list policies for a given enterprise.
**/
export declare class ListPoliciesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    policies?: Policy[];
}
