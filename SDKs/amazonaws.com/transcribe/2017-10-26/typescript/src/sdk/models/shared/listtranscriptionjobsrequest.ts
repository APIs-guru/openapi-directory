import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";


export class ListTranscriptionJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobNameContains" })
  jobNameContains?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Status" })
  status?: TranscriptionJobStatusEnum;
}
