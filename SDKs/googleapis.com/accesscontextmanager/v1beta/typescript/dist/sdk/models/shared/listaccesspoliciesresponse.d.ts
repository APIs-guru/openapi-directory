import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessPolicy } from "./accesspolicy";
/**
 * A response to `ListAccessPoliciesRequest`.
**/
export declare class ListAccessPoliciesResponse extends SpeakeasyBase {
    accessPolicies?: AccessPolicy[];
    nextPageToken?: string;
}
