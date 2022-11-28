import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";
export declare class DescribeActionTargetsResponse extends SpeakeasyBase {
    actionTargets: ActionTarget[];
    nextToken?: string;
}
