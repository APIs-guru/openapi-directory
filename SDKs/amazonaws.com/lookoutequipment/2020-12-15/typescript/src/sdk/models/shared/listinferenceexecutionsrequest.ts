import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InferenceExecutionStatusEnum } from "./inferenceexecutionstatusenum";


export class ListInferenceExecutionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataEndTimeBefore" })
  dataEndTimeBefore?: Date;

  @Metadata({ data: "json, name=DataStartTimeAfter" })
  dataStartTimeAfter?: Date;

  @Metadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Status" })
  status?: InferenceExecutionStatusEnum;
}
