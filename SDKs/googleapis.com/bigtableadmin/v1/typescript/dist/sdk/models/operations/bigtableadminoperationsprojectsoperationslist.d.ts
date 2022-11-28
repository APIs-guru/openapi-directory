import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminOperationsProjectsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigtableadminOperationsProjectsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class BigtableadminOperationsProjectsOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminOperationsProjectsOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminOperationsProjectsOperationsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminOperationsProjectsOperationsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminOperationsProjectsOperationsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminOperationsProjectsOperationsListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminOperationsProjectsOperationsListSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminOperationsProjectsOperationsListSecurity extends SpeakeasyBase {
    option1?: BigtableadminOperationsProjectsOperationsListSecurityOption1;
    option2?: BigtableadminOperationsProjectsOperationsListSecurityOption2;
    option3?: BigtableadminOperationsProjectsOperationsListSecurityOption3;
    option4?: BigtableadminOperationsProjectsOperationsListSecurityOption4;
    option5?: BigtableadminOperationsProjectsOperationsListSecurityOption5;
    option6?: BigtableadminOperationsProjectsOperationsListSecurityOption6;
    option7?: BigtableadminOperationsProjectsOperationsListSecurityOption7;
}
export declare class BigtableadminOperationsProjectsOperationsListRequest extends SpeakeasyBase {
    pathParams: BigtableadminOperationsProjectsOperationsListPathParams;
    queryParams: BigtableadminOperationsProjectsOperationsListQueryParams;
    security: BigtableadminOperationsProjectsOperationsListSecurity;
}
export declare class BigtableadminOperationsProjectsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
