import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListInferenceSchedulersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InferenceSchedulerNameBeginsWith" })
  inferenceSchedulerNameBeginsWith?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
