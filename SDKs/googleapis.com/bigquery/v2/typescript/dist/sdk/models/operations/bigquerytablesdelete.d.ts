import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryTablesDeletePathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
    tableId: string;
}
export declare class BigqueryTablesDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryTablesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesDeleteSecurity extends SpeakeasyBase {
    option1?: BigqueryTablesDeleteSecurityOption1;
    option2?: BigqueryTablesDeleteSecurityOption2;
}
export declare class BigqueryTablesDeleteRequest extends SpeakeasyBase {
    pathParams: BigqueryTablesDeletePathParams;
    queryParams: BigqueryTablesDeleteQueryParams;
    security: BigqueryTablesDeleteSecurity;
}
export declare class BigqueryTablesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
