import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchEventsExecutionDataDetails } from "./cloudwatcheventsexecutiondatadetails";
import { ExecutionStatusEnum } from "./executionstatusenum";



export class DescribeExecutionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionArn" })
  executionArn: string;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=inputDetails" })
  inputDetails?: CloudWatchEventsExecutionDataDetails;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=output" })
  output?: string;

  @SpeakeasyMetadata({ data: "json, name=outputDetails" })
  outputDetails?: CloudWatchEventsExecutionDataDetails;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate: Date;

  @SpeakeasyMetadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stopDate" })
  stopDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=traceHeader" })
  traceHeader?: string;
}
