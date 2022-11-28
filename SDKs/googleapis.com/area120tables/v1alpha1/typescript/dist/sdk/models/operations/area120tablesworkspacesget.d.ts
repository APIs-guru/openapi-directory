import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Area120tablesWorkspacesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum Area120tablesWorkspacesGetViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    ColumnIdView = "COLUMN_ID_VIEW"
}
export declare class Area120tablesWorkspacesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: Area120tablesWorkspacesGetViewEnum;
}
export declare class Area120tablesWorkspacesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesWorkspacesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesWorkspacesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesWorkspacesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesWorkspacesGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesWorkspacesGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesWorkspacesGetSecurity extends SpeakeasyBase {
    option1?: Area120tablesWorkspacesGetSecurityOption1;
    option2?: Area120tablesWorkspacesGetSecurityOption2;
    option3?: Area120tablesWorkspacesGetSecurityOption3;
    option4?: Area120tablesWorkspacesGetSecurityOption4;
    option5?: Area120tablesWorkspacesGetSecurityOption5;
    option6?: Area120tablesWorkspacesGetSecurityOption6;
}
export declare class Area120tablesWorkspacesGetRequest extends SpeakeasyBase {
    pathParams: Area120tablesWorkspacesGetPathParams;
    queryParams: Area120tablesWorkspacesGetQueryParams;
    security: Area120tablesWorkspacesGetSecurity;
}
export declare class Area120tablesWorkspacesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workspace?: shared.Workspace;
}
