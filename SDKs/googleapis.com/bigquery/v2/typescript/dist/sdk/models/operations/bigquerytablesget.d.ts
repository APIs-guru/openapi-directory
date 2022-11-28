import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryTablesGetPathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
    tableId: string;
}
export declare enum BigqueryTablesGetViewEnum {
    Basic = "BASIC",
    Full = "FULL",
    StorageStats = "STORAGE_STATS",
    TableMetadataViewUnspecified = "TABLE_METADATA_VIEW_UNSPECIFIED"
}
export declare class BigqueryTablesGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    selectedFields?: string;
    userIp?: string;
    view?: BigqueryTablesGetViewEnum;
}
export declare class BigqueryTablesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesGetSecurity extends SpeakeasyBase {
    option1?: BigqueryTablesGetSecurityOption1;
    option2?: BigqueryTablesGetSecurityOption2;
    option3?: BigqueryTablesGetSecurityOption3;
}
export declare class BigqueryTablesGetRequest extends SpeakeasyBase {
    pathParams: BigqueryTablesGetPathParams;
    queryParams: BigqueryTablesGetQueryParams;
    security: BigqueryTablesGetSecurity;
}
export declare class BigqueryTablesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    table?: shared.Table;
}
