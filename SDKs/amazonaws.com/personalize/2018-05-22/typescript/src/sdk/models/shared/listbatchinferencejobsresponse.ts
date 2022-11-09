import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchInferenceJobSummary } from "./batchinferencejobsummary";


export class ListBatchInferenceJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchInferenceJobs", elemType: shared.BatchInferenceJobSummary })
  batchInferenceJobs?: BatchInferenceJobSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
