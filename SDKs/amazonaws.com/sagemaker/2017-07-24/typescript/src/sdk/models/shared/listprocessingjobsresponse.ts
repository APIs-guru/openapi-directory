import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingJobSummary } from "./processingjobsummary";



export class ListProcessingJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProcessingJobSummaries", elemType: ProcessingJobSummary })
  processingJobSummaries: ProcessingJobSummary[];
}
