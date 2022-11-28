import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTargetSummary } from "./policytargetsummary";
export declare class ListTargetsForPolicyResponse extends SpeakeasyBase {
    nextToken?: string;
    targets?: PolicyTargetSummary[];
}
