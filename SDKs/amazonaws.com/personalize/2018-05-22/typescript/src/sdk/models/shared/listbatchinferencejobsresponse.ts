import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchInferenceJobSummary } from "./batchinferencejobsummary";



export class ListBatchInferenceJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchInferenceJobs", elemType: BatchInferenceJobSummary })
  batchInferenceJobs?: BatchInferenceJobSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
