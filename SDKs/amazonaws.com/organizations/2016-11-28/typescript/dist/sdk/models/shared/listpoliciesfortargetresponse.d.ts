import { SpeakeasyBase } from "../../../internal/utils";
import { PolicySummary } from "./policysummary";
export declare class ListPoliciesForTargetResponse extends SpeakeasyBase {
    nextToken?: string;
    policies?: PolicySummary[];
}
