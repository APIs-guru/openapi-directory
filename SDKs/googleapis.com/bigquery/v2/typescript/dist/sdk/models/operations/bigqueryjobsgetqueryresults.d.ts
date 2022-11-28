import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryJobsGetQueryResultsPathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
}
export declare class BigqueryJobsGetQueryResultsQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    location?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startIndex?: string;
    timeoutMs?: number;
    userIp?: string;
}
export declare class BigqueryJobsGetQueryResultsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsGetQueryResultsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsGetQueryResultsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsGetQueryResultsSecurity extends SpeakeasyBase {
    option1?: BigqueryJobsGetQueryResultsSecurityOption1;
    option2?: BigqueryJobsGetQueryResultsSecurityOption2;
    option3?: BigqueryJobsGetQueryResultsSecurityOption3;
}
export declare class BigqueryJobsGetQueryResultsRequest extends SpeakeasyBase {
    pathParams: BigqueryJobsGetQueryResultsPathParams;
    queryParams: BigqueryJobsGetQueryResultsQueryParams;
    security: BigqueryJobsGetQueryResultsSecurity;
}
export declare class BigqueryJobsGetQueryResultsResponse extends SpeakeasyBase {
    contentType: string;
    getQueryResultsResponse?: shared.GetQueryResultsResponse;
    statusCode: number;
}
