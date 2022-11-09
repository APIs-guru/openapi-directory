import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";
import { TranscriptionJobSummary } from "./transcriptionjobsummary";


export class ListTranscriptionJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Status" })
  status?: TranscriptionJobStatusEnum;

  @Metadata({ data: "json, name=TranscriptionJobSummaries", elemType: shared.TranscriptionJobSummary })
  transcriptionJobSummaries?: TranscriptionJobSummary[];
}
