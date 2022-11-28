import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";
import { TranscriptionJobSummary } from "./transcriptionjobsummary";



export class ListTranscriptionJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TranscriptionJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TranscriptionJobSummaries", elemType: TranscriptionJobSummary })
  transcriptionJobSummaries?: TranscriptionJobSummary[];
}
