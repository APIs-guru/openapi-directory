import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryTabledataListPathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
    tableId: string;
}
export declare class BigqueryTabledataListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    selectedFields?: string;
    startIndex?: string;
    userIp?: string;
}
export declare class BigqueryTabledataListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTabledataListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTabledataListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTabledataListSecurity extends SpeakeasyBase {
    option1?: BigqueryTabledataListSecurityOption1;
    option2?: BigqueryTabledataListSecurityOption2;
    option3?: BigqueryTabledataListSecurityOption3;
}
export declare class BigqueryTabledataListRequest extends SpeakeasyBase {
    pathParams: BigqueryTabledataListPathParams;
    queryParams: BigqueryTabledataListQueryParams;
    security: BigqueryTabledataListSecurity;
}
export declare class BigqueryTabledataListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tableDataList?: shared.TableDataList;
}
