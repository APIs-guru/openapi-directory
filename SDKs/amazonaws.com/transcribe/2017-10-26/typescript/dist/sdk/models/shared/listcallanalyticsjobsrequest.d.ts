import { SpeakeasyBase } from "../../../internal/utils";
import { CallAnalyticsJobStatusEnum } from "./callanalyticsjobstatusenum";
export declare class ListCallAnalyticsJobsRequest extends SpeakeasyBase {
    jobNameContains?: string;
    maxResults?: number;
    nextToken?: string;
    status?: CallAnalyticsJobStatusEnum;
}
