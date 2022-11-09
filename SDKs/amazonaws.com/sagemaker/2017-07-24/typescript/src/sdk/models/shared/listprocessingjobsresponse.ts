import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProcessingJobSummary } from "./processingjobsummary";


export class ListProcessingJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ProcessingJobSummaries", elemType: shared.ProcessingJobSummary })
  processingJobSummaries: ProcessingJobSummary[];
}
