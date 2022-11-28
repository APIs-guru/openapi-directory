import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryJobsGetPathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
}
export declare class BigqueryJobsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    location?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryJobsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsGetSecurity extends SpeakeasyBase {
    option1?: BigqueryJobsGetSecurityOption1;
    option2?: BigqueryJobsGetSecurityOption2;
    option3?: BigqueryJobsGetSecurityOption3;
}
export declare class BigqueryJobsGetRequest extends SpeakeasyBase {
    pathParams: BigqueryJobsGetPathParams;
    queryParams: BigqueryJobsGetQueryParams;
    security: BigqueryJobsGetSecurity;
}
export declare class BigqueryJobsGetResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
