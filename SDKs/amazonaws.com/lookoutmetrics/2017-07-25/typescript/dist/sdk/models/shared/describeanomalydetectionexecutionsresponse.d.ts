import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStatus } from "./executionstatus";
export declare class DescribeAnomalyDetectionExecutionsResponse extends SpeakeasyBase {
    executionList?: ExecutionStatus[];
    nextToken?: string;
}
