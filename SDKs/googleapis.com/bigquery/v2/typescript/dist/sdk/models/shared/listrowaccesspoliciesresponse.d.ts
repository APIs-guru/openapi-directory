import { SpeakeasyBase } from "../../../internal/utils";
import { RowAccessPolicy } from "./rowaccesspolicy";
/**
 * Response message for the ListRowAccessPolicies method.
**/
export declare class ListRowAccessPoliciesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    rowAccessPolicies?: RowAccessPolicy[];
}
