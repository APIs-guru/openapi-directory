import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Area120tablesTablesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class Area120tablesTablesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesListSecurity extends SpeakeasyBase {
    option1?: Area120tablesTablesListSecurityOption1;
    option2?: Area120tablesTablesListSecurityOption2;
    option3?: Area120tablesTablesListSecurityOption3;
    option4?: Area120tablesTablesListSecurityOption4;
    option5?: Area120tablesTablesListSecurityOption5;
    option6?: Area120tablesTablesListSecurityOption6;
}
export declare class Area120tablesTablesListRequest extends SpeakeasyBase {
    queryParams: Area120tablesTablesListQueryParams;
    security: Area120tablesTablesListSecurity;
}
export declare class Area120tablesTablesListResponse extends SpeakeasyBase {
    contentType: string;
    listTablesResponse?: shared.ListTablesResponse;
    statusCode: number;
}
