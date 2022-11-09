import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InferenceExecutionSummary } from "./inferenceexecutionsummary";


export class ListInferenceExecutionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InferenceExecutionSummaries", elemType: shared.InferenceExecutionSummary })
  inferenceExecutionSummaries?: InferenceExecutionSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
