import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CallAnalyticsJobStatusEnum } from "./callanalyticsjobstatusenum";



export class ListCallAnalyticsJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobNameContains" })
  jobNameContains?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CallAnalyticsJobStatusEnum;
}
