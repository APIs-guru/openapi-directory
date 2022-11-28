import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryDatasetsGetPathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
}
export declare class BigqueryDatasetsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryDatasetsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryDatasetsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryDatasetsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryDatasetsGetSecurity extends SpeakeasyBase {
    option1?: BigqueryDatasetsGetSecurityOption1;
    option2?: BigqueryDatasetsGetSecurityOption2;
    option3?: BigqueryDatasetsGetSecurityOption3;
}
export declare class BigqueryDatasetsGetRequest extends SpeakeasyBase {
    pathParams: BigqueryDatasetsGetPathParams;
    queryParams: BigqueryDatasetsGetQueryParams;
    security: BigqueryDatasetsGetSecurity;
}
export declare class BigqueryDatasetsGetResponse extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
