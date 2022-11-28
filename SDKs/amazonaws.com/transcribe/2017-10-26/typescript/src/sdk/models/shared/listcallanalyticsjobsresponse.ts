import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CallAnalyticsJobSummary } from "./callanalyticsjobsummary";
import { CallAnalyticsJobStatusEnum } from "./callanalyticsjobstatusenum";



export class ListCallAnalyticsJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CallAnalyticsJobSummaries", elemType: CallAnalyticsJobSummary })
  callAnalyticsJobSummaries?: CallAnalyticsJobSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CallAnalyticsJobStatusEnum;
}
