import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetJobsStateEnum {
    Unknown = "",
    Active = "active",
    Completed = "completed",
    Failed = "failed",
    Waiting = "waiting",
    Delayed = "delayed"
}
export declare class GetJobsPathParams extends SpeakeasyBase {
    state: GetJobsStateEnum;
}
export declare class GetJobsQueryParams extends SpeakeasyBase {
    count?: number;
    jobType?: shared.JobTypeEnum;
    sort?: string;
    start?: number;
}
export declare class GetJobsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetJobs200ApplicationJson extends SpeakeasyBase {
    data?: any[];
    total?: number;
}
export declare class GetJobsRequest extends SpeakeasyBase {
    pathParams: GetJobsPathParams;
    queryParams: GetJobsQueryParams;
    security: GetJobsSecurity;
}
export declare class GetJobsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getJobs200ApplicationJsonObject?: GetJobs200ApplicationJson;
}
