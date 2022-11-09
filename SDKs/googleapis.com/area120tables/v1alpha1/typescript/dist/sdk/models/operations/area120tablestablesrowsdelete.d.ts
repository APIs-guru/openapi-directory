import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Area120tablesTablesRowsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class Area120tablesTablesRowsDeleteQueryParams extends SpeakeasyBase {
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
}
export declare class Area120tablesTablesRowsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsDeleteSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsDeleteSecurity extends SpeakeasyBase {
    option1?: Area120tablesTablesRowsDeleteSecurityOption1;
    option2?: Area120tablesTablesRowsDeleteSecurityOption2;
    option3?: Area120tablesTablesRowsDeleteSecurityOption3;
    option4?: Area120tablesTablesRowsDeleteSecurityOption4;
}
export declare class Area120tablesTablesRowsDeleteRequest extends SpeakeasyBase {
    pathParams: Area120tablesTablesRowsDeletePathParams;
    queryParams: Area120tablesTablesRowsDeleteQueryParams;
    security: Area120tablesTablesRowsDeleteSecurity;
}
export declare class Area120tablesTablesRowsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
