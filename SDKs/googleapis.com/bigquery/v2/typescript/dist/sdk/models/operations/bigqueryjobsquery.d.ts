import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryJobsQueryPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class BigqueryJobsQueryQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryJobsQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsQuerySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsQuerySecurity extends SpeakeasyBase {
    option1?: BigqueryJobsQuerySecurityOption1;
    option2?: BigqueryJobsQuerySecurityOption2;
    option3?: BigqueryJobsQuerySecurityOption3;
}
export declare class BigqueryJobsQueryRequest extends SpeakeasyBase {
    pathParams: BigqueryJobsQueryPathParams;
    queryParams: BigqueryJobsQueryQueryParams;
    request?: shared.QueryRequest;
    security: BigqueryJobsQuerySecurity;
}
export declare class BigqueryJobsQueryResponse extends SpeakeasyBase {
    contentType: string;
    queryResponse?: shared.QueryResponse;
    statusCode: number;
}
