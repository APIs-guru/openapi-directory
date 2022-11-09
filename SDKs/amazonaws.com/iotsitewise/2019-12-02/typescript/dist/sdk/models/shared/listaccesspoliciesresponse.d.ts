import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessPolicySummary } from "./accesspolicysummary";
export declare class ListAccessPoliciesResponse extends SpeakeasyBase {
    accessPolicySummaries: AccessPolicySummary[];
    nextToken?: string;
}
