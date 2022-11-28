import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigatewayProjectsLocationsApisCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigatewayProjectsLocationsApisCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    apiId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigatewayProjectsLocationsApisCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigatewayProjectsLocationsApisCreateRequest extends SpeakeasyBase {
    pathParams: ApigatewayProjectsLocationsApisCreatePathParams;
    queryParams: ApigatewayProjectsLocationsApisCreateQueryParams;
    request?: shared.ApigatewayApiInput;
    security: ApigatewayProjectsLocationsApisCreateSecurity;
}
export declare class ApigatewayProjectsLocationsApisCreateResponse extends SpeakeasyBase {
    apigatewayOperation?: shared.ApigatewayOperation;
    contentType: string;
    statusCode: number;
}
