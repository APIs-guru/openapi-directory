import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryTablesInsertPathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
}
export declare class BigqueryTablesInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryTablesInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesInsertSecurity extends SpeakeasyBase {
    option1?: BigqueryTablesInsertSecurityOption1;
    option2?: BigqueryTablesInsertSecurityOption2;
}
export declare class BigqueryTablesInsertRequest extends SpeakeasyBase {
    pathParams: BigqueryTablesInsertPathParams;
    queryParams: BigqueryTablesInsertQueryParams;
    request?: shared.Table;
    security: BigqueryTablesInsertSecurity;
}
export declare class BigqueryTablesInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    table?: shared.Table;
}
