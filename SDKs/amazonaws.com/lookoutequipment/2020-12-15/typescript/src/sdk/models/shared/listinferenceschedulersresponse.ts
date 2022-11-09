import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InferenceSchedulerSummary } from "./inferenceschedulersummary";


export class ListInferenceSchedulersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InferenceSchedulerSummaries", elemType: shared.InferenceSchedulerSummary })
  inferenceSchedulerSummaries?: InferenceSchedulerSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
