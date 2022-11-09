import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Area120tablesWorkspacesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class Area120tablesWorkspacesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesWorkspacesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesWorkspacesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesWorkspacesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesWorkspacesListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesWorkspacesListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesWorkspacesListSecurity extends SpeakeasyBase {
    option1?: Area120tablesWorkspacesListSecurityOption1;
    option2?: Area120tablesWorkspacesListSecurityOption2;
    option3?: Area120tablesWorkspacesListSecurityOption3;
    option4?: Area120tablesWorkspacesListSecurityOption4;
    option5?: Area120tablesWorkspacesListSecurityOption5;
    option6?: Area120tablesWorkspacesListSecurityOption6;
}
export declare class Area120tablesWorkspacesListRequest extends SpeakeasyBase {
    queryParams: Area120tablesWorkspacesListQueryParams;
    security: Area120tablesWorkspacesListSecurity;
}
export declare class Area120tablesWorkspacesListResponse extends SpeakeasyBase {
    contentType: string;
    listWorkspacesResponse?: shared.ListWorkspacesResponse;
    statusCode: number;
}
