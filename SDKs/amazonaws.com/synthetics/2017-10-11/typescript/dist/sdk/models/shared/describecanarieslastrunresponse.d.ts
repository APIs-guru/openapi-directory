import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CanaryLastRun } from "./canarylastrun";
export declare class DescribeCanariesLastRunResponse extends SpeakeasyBase {
    canariesLastRun?: CanaryLastRun[];
    nextToken?: string;
}
