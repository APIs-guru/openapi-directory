import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryModelsDeletePathParams extends SpeakeasyBase {
    datasetId: string;
    modelId: string;
    projectId: string;
}
export declare class BigqueryModelsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryModelsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryModelsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryModelsDeleteSecurity extends SpeakeasyBase {
    option1?: BigqueryModelsDeleteSecurityOption1;
    option2?: BigqueryModelsDeleteSecurityOption2;
}
export declare class BigqueryModelsDeleteRequest extends SpeakeasyBase {
    pathParams: BigqueryModelsDeletePathParams;
    queryParams: BigqueryModelsDeleteQueryParams;
    security: BigqueryModelsDeleteSecurity;
}
export declare class BigqueryModelsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
