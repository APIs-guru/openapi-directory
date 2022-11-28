import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryJobsInsertPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class BigqueryJobsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryJobsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsInsertSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsInsertSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsInsertSecurity extends SpeakeasyBase {
    option1?: BigqueryJobsInsertSecurityOption1;
    option2?: BigqueryJobsInsertSecurityOption2;
    option3?: BigqueryJobsInsertSecurityOption3;
    option4?: BigqueryJobsInsertSecurityOption4;
    option5?: BigqueryJobsInsertSecurityOption5;
}
export declare class BigqueryJobsInsertRequest extends SpeakeasyBase {
    pathParams: BigqueryJobsInsertPathParams;
    queryParams: BigqueryJobsInsertQueryParams;
    request?: Uint8Array;
    security: BigqueryJobsInsertSecurity;
}
export declare class BigqueryJobsInsertResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
