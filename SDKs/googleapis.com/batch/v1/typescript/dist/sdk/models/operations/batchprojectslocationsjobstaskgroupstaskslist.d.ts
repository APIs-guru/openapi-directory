import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchProjectsLocationsJobsTaskGroupsTasksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BatchProjectsLocationsJobsTaskGroupsTasksListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BatchProjectsLocationsJobsTaskGroupsTasksListRequest extends SpeakeasyBase {
    pathParams: BatchProjectsLocationsJobsTaskGroupsTasksListPathParams;
    queryParams: BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams;
    security: BatchProjectsLocationsJobsTaskGroupsTasksListSecurity;
}
export declare class BatchProjectsLocationsJobsTaskGroupsTasksListResponse extends SpeakeasyBase {
    contentType: string;
    listTasksResponse?: shared.ListTasksResponse;
    statusCode: number;
}
