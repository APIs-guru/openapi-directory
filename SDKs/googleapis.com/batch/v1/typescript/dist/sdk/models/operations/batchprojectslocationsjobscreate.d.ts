import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchProjectsLocationsJobsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BatchProjectsLocationsJobsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    jobId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BatchProjectsLocationsJobsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BatchProjectsLocationsJobsCreateRequest extends SpeakeasyBase {
    pathParams: BatchProjectsLocationsJobsCreatePathParams;
    queryParams: BatchProjectsLocationsJobsCreateQueryParams;
    request?: shared.JobInput;
    security: BatchProjectsLocationsJobsCreateSecurity;
}
export declare class BatchProjectsLocationsJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
