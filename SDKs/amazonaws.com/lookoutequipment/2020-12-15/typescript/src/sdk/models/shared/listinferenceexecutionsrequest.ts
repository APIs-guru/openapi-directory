import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InferenceExecutionStatusEnum } from "./inferenceexecutionstatusenum";



export class ListInferenceExecutionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataEndTimeBefore" })
  dataEndTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=DataStartTimeAfter" })
  dataStartTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InferenceExecutionStatusEnum;
}
