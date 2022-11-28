import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InferenceExecutionSummary } from "./inferenceexecutionsummary";



export class ListInferenceExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InferenceExecutionSummaries", elemType: InferenceExecutionSummary })
  inferenceExecutionSummaries?: InferenceExecutionSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
