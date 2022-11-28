import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryTablesListPathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
}
export declare class BigqueryTablesListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryTablesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesListSecurity extends SpeakeasyBase {
    option1?: BigqueryTablesListSecurityOption1;
    option2?: BigqueryTablesListSecurityOption2;
    option3?: BigqueryTablesListSecurityOption3;
}
export declare class BigqueryTablesListRequest extends SpeakeasyBase {
    pathParams: BigqueryTablesListPathParams;
    queryParams: BigqueryTablesListQueryParams;
    security: BigqueryTablesListSecurity;
}
export declare class BigqueryTablesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tableList?: shared.TableList;
}
