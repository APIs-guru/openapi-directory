import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryDatasetsUpdatePathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
}
export declare class BigqueryDatasetsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryDatasetsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryDatasetsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryDatasetsUpdateSecurity extends SpeakeasyBase {
    option1?: BigqueryDatasetsUpdateSecurityOption1;
    option2?: BigqueryDatasetsUpdateSecurityOption2;
}
export declare class BigqueryDatasetsUpdateRequest extends SpeakeasyBase {
    pathParams: BigqueryDatasetsUpdatePathParams;
    queryParams: BigqueryDatasetsUpdateQueryParams;
    request?: shared.Dataset;
    security: BigqueryDatasetsUpdateSecurity;
}
export declare class BigqueryDatasetsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
