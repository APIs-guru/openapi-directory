import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchEventsExecutionDataDetails } from "./cloudwatcheventsexecutiondatadetails";
import { ExecutionStatusEnum } from "./executionstatusenum";
export declare class DescribeExecutionOutput extends SpeakeasyBase {
    executionArn: string;
    input?: string;
    inputDetails?: CloudWatchEventsExecutionDataDetails;
    name?: string;
    output?: string;
    outputDetails?: CloudWatchEventsExecutionDataDetails;
    startDate: Date;
    stateMachineArn: string;
    status: ExecutionStatusEnum;
    stopDate?: Date;
    traceHeader?: string;
}
