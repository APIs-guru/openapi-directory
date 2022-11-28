import { SpeakeasyBase } from "../../../internal/utils";
import { BillingDetails } from "./billingdetails";
import { CloudWatchEventsExecutionDataDetails } from "./cloudwatcheventsexecutiondatadetails";
import { SyncExecutionStatusEnum } from "./syncexecutionstatusenum";
export declare class StartSyncExecutionOutput extends SpeakeasyBase {
    billingDetails?: BillingDetails;
    cause?: string;
    error?: string;
    executionArn: string;
    input?: string;
    inputDetails?: CloudWatchEventsExecutionDataDetails;
    name?: string;
    output?: string;
    outputDetails?: CloudWatchEventsExecutionDataDetails;
    startDate: Date;
    stateMachineArn?: string;
    status: SyncExecutionStatusEnum;
    stopDate: Date;
    traceHeader?: string;
}
