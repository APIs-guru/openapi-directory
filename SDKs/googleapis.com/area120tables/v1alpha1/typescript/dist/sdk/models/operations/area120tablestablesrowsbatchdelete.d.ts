import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Area120tablesTablesRowsBatchDeletePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class Area120tablesTablesRowsBatchDeleteQueryParams extends SpeakeasyBase {
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
export declare class Area120tablesTablesRowsBatchDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsBatchDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsBatchDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsBatchDeleteSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsBatchDeleteSecurity extends SpeakeasyBase {
    option1?: Area120tablesTablesRowsBatchDeleteSecurityOption1;
    option2?: Area120tablesTablesRowsBatchDeleteSecurityOption2;
    option3?: Area120tablesTablesRowsBatchDeleteSecurityOption3;
    option4?: Area120tablesTablesRowsBatchDeleteSecurityOption4;
}
export declare class Area120tablesTablesRowsBatchDeleteRequest extends SpeakeasyBase {
    pathParams: Area120tablesTablesRowsBatchDeletePathParams;
    queryParams: Area120tablesTablesRowsBatchDeleteQueryParams;
    request?: shared.BatchDeleteRowsRequest;
    security: Area120tablesTablesRowsBatchDeleteSecurity;
}
export declare class Area120tablesTablesRowsBatchDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
