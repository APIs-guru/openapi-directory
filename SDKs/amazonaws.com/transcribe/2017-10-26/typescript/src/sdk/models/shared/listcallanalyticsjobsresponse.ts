import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CallAnalyticsJobSummary } from "./callanalyticsjobsummary";
import { CallAnalyticsJobStatusEnum } from "./callanalyticsjobstatusenum";


export class ListCallAnalyticsJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CallAnalyticsJobSummaries", elemType: shared.CallAnalyticsJobSummary })
  callAnalyticsJobSummaries?: CallAnalyticsJobSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Status" })
  status?: CallAnalyticsJobStatusEnum;
}
