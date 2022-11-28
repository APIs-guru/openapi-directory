import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InferenceSchedulerSummary } from "./inferenceschedulersummary";



export class ListInferenceSchedulersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InferenceSchedulerSummaries", elemType: InferenceSchedulerSummary })
  inferenceSchedulerSummaries?: InferenceSchedulerSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
