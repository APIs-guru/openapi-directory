import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryDatasetsDeletePathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
}
export declare class BigqueryDatasetsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    deleteContents?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryDatasetsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryDatasetsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryDatasetsDeleteSecurity extends SpeakeasyBase {
    option1?: BigqueryDatasetsDeleteSecurityOption1;
    option2?: BigqueryDatasetsDeleteSecurityOption2;
}
export declare class BigqueryDatasetsDeleteRequest extends SpeakeasyBase {
    pathParams: BigqueryDatasetsDeletePathParams;
    queryParams: BigqueryDatasetsDeleteQueryParams;
    security: BigqueryDatasetsDeleteSecurity;
}
export declare class BigqueryDatasetsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
