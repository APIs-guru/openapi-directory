import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryModelsGetPathParams extends SpeakeasyBase {
    datasetId: string;
    modelId: string;
    projectId: string;
}
export declare class BigqueryModelsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryModelsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryModelsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryModelsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryModelsGetSecurity extends SpeakeasyBase {
    option1?: BigqueryModelsGetSecurityOption1;
    option2?: BigqueryModelsGetSecurityOption2;
    option3?: BigqueryModelsGetSecurityOption3;
}
export declare class BigqueryModelsGetRequest extends SpeakeasyBase {
    pathParams: BigqueryModelsGetPathParams;
    queryParams: BigqueryModelsGetQueryParams;
    security: BigqueryModelsGetSecurity;
}
export declare class BigqueryModelsGetResponse extends SpeakeasyBase {
    contentType: string;
    model?: shared.Model;
    statusCode: number;
}
