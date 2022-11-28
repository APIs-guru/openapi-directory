import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryDatasetsInsertPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class BigqueryDatasetsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryDatasetsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryDatasetsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryDatasetsInsertSecurity extends SpeakeasyBase {
    option1?: BigqueryDatasetsInsertSecurityOption1;
    option2?: BigqueryDatasetsInsertSecurityOption2;
}
export declare class BigqueryDatasetsInsertRequest extends SpeakeasyBase {
    pathParams: BigqueryDatasetsInsertPathParams;
    queryParams: BigqueryDatasetsInsertQueryParams;
    request?: shared.Dataset;
    security: BigqueryDatasetsInsertSecurity;
}
export declare class BigqueryDatasetsInsertResponse extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
