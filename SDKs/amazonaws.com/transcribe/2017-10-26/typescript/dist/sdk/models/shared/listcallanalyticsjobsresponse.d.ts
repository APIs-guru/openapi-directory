import { SpeakeasyBase } from "../../../internal/utils";
import { CallAnalyticsJobSummary } from "./callanalyticsjobsummary";
import { CallAnalyticsJobStatusEnum } from "./callanalyticsjobstatusenum";
export declare class ListCallAnalyticsJobsResponse extends SpeakeasyBase {
    callAnalyticsJobSummaries?: CallAnalyticsJobSummary[];
    nextToken?: string;
    status?: CallAnalyticsJobStatusEnum;
}
