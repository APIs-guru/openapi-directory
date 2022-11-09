import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Area120tablesTablesRowsBatchCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class Area120tablesTablesRowsBatchCreateQueryParams extends SpeakeasyBase {
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
export declare class Area120tablesTablesRowsBatchCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsBatchCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsBatchCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsBatchCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Area120tablesTablesRowsBatchCreateSecurity extends SpeakeasyBase {
    option1?: Area120tablesTablesRowsBatchCreateSecurityOption1;
    option2?: Area120tablesTablesRowsBatchCreateSecurityOption2;
    option3?: Area120tablesTablesRowsBatchCreateSecurityOption3;
    option4?: Area120tablesTablesRowsBatchCreateSecurityOption4;
}
export declare class Area120tablesTablesRowsBatchCreateRequest extends SpeakeasyBase {
    pathParams: Area120tablesTablesRowsBatchCreatePathParams;
    queryParams: Area120tablesTablesRowsBatchCreateQueryParams;
    request?: shared.BatchCreateRowsRequest;
    security: Area120tablesTablesRowsBatchCreateSecurity;
}
export declare class Area120tablesTablesRowsBatchCreateResponse extends SpeakeasyBase {
    batchCreateRowsResponse?: shared.BatchCreateRowsResponse;
    contentType: string;
    statusCode: number;
}
