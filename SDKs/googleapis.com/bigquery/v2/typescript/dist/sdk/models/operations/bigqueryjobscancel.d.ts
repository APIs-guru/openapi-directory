import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryJobsCancelPathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
}
export declare class BigqueryJobsCancelQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    location?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryJobsCancelSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsCancelSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsCancelSecurity extends SpeakeasyBase {
    option1?: BigqueryJobsCancelSecurityOption1;
    option2?: BigqueryJobsCancelSecurityOption2;
}
export declare class BigqueryJobsCancelRequest extends SpeakeasyBase {
    pathParams: BigqueryJobsCancelPathParams;
    queryParams: BigqueryJobsCancelQueryParams;
    security: BigqueryJobsCancelSecurity;
}
export declare class BigqueryJobsCancelResponse extends SpeakeasyBase {
    contentType: string;
    jobCancelResponse?: shared.JobCancelResponse;
    statusCode: number;
}
