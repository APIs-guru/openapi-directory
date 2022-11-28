import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Area120tablesTablesRowsBatchUpdatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class Area120tablesTablesRowsBatchUpdateQueryParams extends SpeakeasyBase {
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
export declare class Area120tablesTablesRowsBatchUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsBatchUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsBatchUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsBatchUpdateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsBatchUpdateSecurity extends SpeakeasyBase {
    option1?: Area120tablesTablesRowsBatchUpdateSecurityOption1;
    option2?: Area120tablesTablesRowsBatchUpdateSecurityOption2;
    option3?: Area120tablesTablesRowsBatchUpdateSecurityOption3;
    option4?: Area120tablesTablesRowsBatchUpdateSecurityOption4;
}
export declare class Area120tablesTablesRowsBatchUpdateRequest extends SpeakeasyBase {
    pathParams: Area120tablesTablesRowsBatchUpdatePathParams;
    queryParams: Area120tablesTablesRowsBatchUpdateQueryParams;
    request?: shared.BatchUpdateRowsRequest;
    security: Area120tablesTablesRowsBatchUpdateSecurity;
}
export declare class Area120tablesTablesRowsBatchUpdateResponse extends SpeakeasyBase {
    batchUpdateRowsResponse?: shared.BatchUpdateRowsResponse;
    contentType: string;
    statusCode: number;
}
