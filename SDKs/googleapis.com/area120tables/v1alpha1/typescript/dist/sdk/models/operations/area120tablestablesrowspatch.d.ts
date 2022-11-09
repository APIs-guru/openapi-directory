import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Area120tablesTablesRowsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum Area120tablesTablesRowsPatchViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    ColumnIdView = "COLUMN_ID_VIEW"
}
export declare class Area120tablesTablesRowsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: Area120tablesTablesRowsPatchViewEnum;
}
export declare class Area120tablesTablesRowsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsPatchSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsPatchSecurity extends SpeakeasyBase {
    option1?: Area120tablesTablesRowsPatchSecurityOption1;
    option2?: Area120tablesTablesRowsPatchSecurityOption2;
    option3?: Area120tablesTablesRowsPatchSecurityOption3;
    option4?: Area120tablesTablesRowsPatchSecurityOption4;
}
export declare class Area120tablesTablesRowsPatchRequest extends SpeakeasyBase {
    pathParams: Area120tablesTablesRowsPatchPathParams;
    queryParams: Area120tablesTablesRowsPatchQueryParams;
    request?: shared.Row;
    security: Area120tablesTablesRowsPatchSecurity;
}
export declare class Area120tablesTablesRowsPatchResponse extends SpeakeasyBase {
    contentType: string;
    row?: shared.Row;
    statusCode: number;
}
