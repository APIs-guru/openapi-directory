import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryModelsListPathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
}
export declare class BigqueryModelsListQueryParams extends SpeakeasyBase {
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
export declare class BigqueryModelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryModelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryModelsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryModelsListSecurity extends SpeakeasyBase {
    option1?: BigqueryModelsListSecurityOption1;
    option2?: BigqueryModelsListSecurityOption2;
    option3?: BigqueryModelsListSecurityOption3;
}
export declare class BigqueryModelsListRequest extends SpeakeasyBase {
    pathParams: BigqueryModelsListPathParams;
    queryParams: BigqueryModelsListQueryParams;
    security: BigqueryModelsListSecurity;
}
export declare class BigqueryModelsListResponse extends SpeakeasyBase {
    contentType: string;
    listModelsResponse?: shared.ListModelsResponse;
    statusCode: number;
}
