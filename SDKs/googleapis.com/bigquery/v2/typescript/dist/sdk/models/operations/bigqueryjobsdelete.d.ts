import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryJobsDeletePathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
}
export declare class BigqueryJobsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    location?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryJobsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsDeleteSecurity extends SpeakeasyBase {
    option1?: BigqueryJobsDeleteSecurityOption1;
    option2?: BigqueryJobsDeleteSecurityOption2;
}
export declare class BigqueryJobsDeleteRequest extends SpeakeasyBase {
    pathParams: BigqueryJobsDeletePathParams;
    queryParams: BigqueryJobsDeleteQueryParams;
    security: BigqueryJobsDeleteSecurity;
}
export declare class BigqueryJobsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
