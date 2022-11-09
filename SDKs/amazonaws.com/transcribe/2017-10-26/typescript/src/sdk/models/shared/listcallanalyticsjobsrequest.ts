import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CallAnalyticsJobStatusEnum } from "./callanalyticsjobstatusenum";


export class ListCallAnalyticsJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobNameContains" })
  jobNameContains?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Status" })
  status?: CallAnalyticsJobStatusEnum;
}
