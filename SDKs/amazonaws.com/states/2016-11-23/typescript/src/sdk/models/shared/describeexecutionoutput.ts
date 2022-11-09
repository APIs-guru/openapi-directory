import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchEventsExecutionDataDetails } from "./cloudwatcheventsexecutiondatadetails";
import { CloudWatchEventsExecutionDataDetails } from "./cloudwatcheventsexecutiondatadetails";
import { ExecutionStatusEnum } from "./executionstatusenum";


export class DescribeExecutionOutput extends SpeakeasyBase {
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
  stateMachineArn: string;

  @Metadata({ data: "json, name=status" })
  status: ExecutionStatusEnum;

  @Metadata({ data: "json, name=stopDate" })
  stopDate?: Date;

  @Metadata({ data: "json, name=traceHeader" })
  traceHeader?: string;
}
