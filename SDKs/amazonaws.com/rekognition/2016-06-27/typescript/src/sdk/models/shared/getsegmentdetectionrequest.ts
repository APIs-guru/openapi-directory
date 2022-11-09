import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSegmentDetectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
