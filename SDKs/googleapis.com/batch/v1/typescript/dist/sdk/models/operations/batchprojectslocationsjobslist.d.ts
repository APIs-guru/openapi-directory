import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchProjectsLocationsJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BatchProjectsLocationsJobsListQueryParams extends SpeakeasyBase {
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
export declare class BatchProjectsLocationsJobsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BatchProjectsLocationsJobsListRequest extends SpeakeasyBase {
    pathParams: BatchProjectsLocationsJobsListPathParams;
    queryParams: BatchProjectsLocationsJobsListQueryParams;
    security: BatchProjectsLocationsJobsListSecurity;
}
export declare class BatchProjectsLocationsJobsListResponse extends SpeakeasyBase {
    contentType: string;
    listJobsResponse?: shared.ListJobsResponse;
    statusCode: number;
}
