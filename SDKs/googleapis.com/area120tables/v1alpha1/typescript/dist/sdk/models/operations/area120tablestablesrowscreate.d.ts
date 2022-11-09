import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Area120tablesTablesRowsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum Area120tablesTablesRowsCreateViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    ColumnIdView = "COLUMN_ID_VIEW"
}
export declare class Area120tablesTablesRowsCreateQueryParams extends SpeakeasyBase {
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
    view?: Area120tablesTablesRowsCreateViewEnum;
}
export declare class Area120tablesTablesRowsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsCreateSecurity extends SpeakeasyBase {
    option1?: Area120tablesTablesRowsCreateSecurityOption1;
    option2?: Area120tablesTablesRowsCreateSecurityOption2;
    option3?: Area120tablesTablesRowsCreateSecurityOption3;
    option4?: Area120tablesTablesRowsCreateSecurityOption4;
}
export declare class Area120tablesTablesRowsCreateRequest extends SpeakeasyBase {
    pathParams: Area120tablesTablesRowsCreatePathParams;
    queryParams: Area120tablesTablesRowsCreateQueryParams;
    request?: shared.Row;
    security: Area120tablesTablesRowsCreateSecurity;
}
export declare class Area120tablesTablesRowsCreateResponse extends SpeakeasyBase {
    contentType: string;
    row?: shared.Row;
    statusCode: number;
}
