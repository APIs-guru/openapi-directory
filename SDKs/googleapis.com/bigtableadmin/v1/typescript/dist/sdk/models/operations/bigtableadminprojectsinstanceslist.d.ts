import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigtableadminProjectsInstancesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigtableadminProjectsInstancesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesListSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesListSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesListSecurityOption1;
    option2?: BigtableadminProjectsInstancesListSecurityOption2;
    option3?: BigtableadminProjectsInstancesListSecurityOption3;
    option4?: BigtableadminProjectsInstancesListSecurityOption4;
    option5?: BigtableadminProjectsInstancesListSecurityOption5;
    option6?: BigtableadminProjectsInstancesListSecurityOption6;
    option7?: BigtableadminProjectsInstancesListSecurityOption7;
}
export declare class BigtableadminProjectsInstancesListRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesListPathParams;
    queryParams: BigtableadminProjectsInstancesListQueryParams;
    security: BigtableadminProjectsInstancesListSecurity;
}
export declare class BigtableadminProjectsInstancesListResponse extends SpeakeasyBase {
    contentType: string;
    listInstancesResponse?: shared.ListInstancesResponse;
    statusCode: number;
}
