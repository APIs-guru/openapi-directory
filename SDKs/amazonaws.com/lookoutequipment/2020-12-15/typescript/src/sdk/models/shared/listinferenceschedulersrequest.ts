import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListInferenceSchedulersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InferenceSchedulerNameBeginsWith" })
  inferenceSchedulerNameBeginsWith?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=ModelName" })
  modelName?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
