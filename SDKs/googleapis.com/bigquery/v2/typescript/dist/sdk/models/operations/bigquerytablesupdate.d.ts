import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryTablesUpdatePathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
    tableId: string;
}
export declare class BigqueryTablesUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    autodetectSchema?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryTablesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesUpdateSecurity extends SpeakeasyBase {
    option1?: BigqueryTablesUpdateSecurityOption1;
    option2?: BigqueryTablesUpdateSecurityOption2;
}
export declare class BigqueryTablesUpdateRequest extends SpeakeasyBase {
    pathParams: BigqueryTablesUpdatePathParams;
    queryParams: BigqueryTablesUpdateQueryParams;
    request?: shared.Table;
    security: BigqueryTablesUpdateSecurity;
}
export declare class BigqueryTablesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    table?: shared.Table;
}
