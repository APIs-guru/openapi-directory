import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryDatasetsListPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class BigqueryDatasetsListQueryParams extends SpeakeasyBase {
    all?: boolean;
    alt?: shared.AltEnum;
    fields?: string;
    filter?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryDatasetsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryDatasetsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryDatasetsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryDatasetsListSecurity extends SpeakeasyBase {
    option1?: BigqueryDatasetsListSecurityOption1;
    option2?: BigqueryDatasetsListSecurityOption2;
    option3?: BigqueryDatasetsListSecurityOption3;
}
export declare class BigqueryDatasetsListRequest extends SpeakeasyBase {
    pathParams: BigqueryDatasetsListPathParams;
    queryParams: BigqueryDatasetsListQueryParams;
    security: BigqueryDatasetsListSecurity;
}
export declare class BigqueryDatasetsListResponse extends SpeakeasyBase {
    contentType: string;
    datasetList?: shared.DatasetList;
    statusCode: number;
}
