import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BillingDetails } from "./billingdetails";
import { CloudWatchEventsExecutionDataDetails } from "./cloudwatcheventsexecutiondatadetails";
import { CloudWatchEventsExecutionDataDetails } from "./cloudwatcheventsexecutiondatadetails";
import { SyncExecutionStatusEnum } from "./syncexecutionstatusenum";


export class StartSyncExecutionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingDetails" })
  billingDetails?: BillingDetails;

  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=executionArn" })
  executionArn: string;

  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=inputDetails" })
  inputDetails?: CloudWatchEventsExecutionDataDetails;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=output" })
  output?: string;

  @Metadata({ data: "json, name=outputDetails" })
  outputDetails?: CloudWatchEventsExecutionDataDetails;

  @Metadata({ data: "json, name=startDate" })
  startDate: Date;

  @Metadata({ data: "json, name=stateMachineArn" })
  stateMachineArn?: string;

  @Metadata({ data: "json, name=status" })
  status: SyncExecutionStatusEnum;

  @Metadata({ data: "json, name=stopDate" })
  stopDate: Date;

  @Metadata({ data: "json, name=traceHeader" })
  traceHeader?: string;
}
