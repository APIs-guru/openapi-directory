import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Area120tablesTablesRowsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum Area120tablesTablesRowsListViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    ColumnIdView = "COLUMN_ID_VIEW"
}
export declare class Area120tablesTablesRowsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: Area120tablesTablesRowsListViewEnum;
}
export declare class Area120tablesTablesRowsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsListSecurity extends SpeakeasyBase {
    option1?: Area120tablesTablesRowsListSecurityOption1;
    option2?: Area120tablesTablesRowsListSecurityOption2;
    option3?: Area120tablesTablesRowsListSecurityOption3;
    option4?: Area120tablesTablesRowsListSecurityOption4;
    option5?: Area120tablesTablesRowsListSecurityOption5;
    option6?: Area120tablesTablesRowsListSecurityOption6;
}
export declare class Area120tablesTablesRowsListRequest extends SpeakeasyBase {
    pathParams: Area120tablesTablesRowsListPathParams;
    queryParams: Area120tablesTablesRowsListQueryParams;
    security: Area120tablesTablesRowsListSecurity;
}
export declare class Area120tablesTablesRowsListResponse extends SpeakeasyBase {
    contentType: string;
    listRowsResponse?: shared.ListRowsResponse;
    statusCode: number;
}
