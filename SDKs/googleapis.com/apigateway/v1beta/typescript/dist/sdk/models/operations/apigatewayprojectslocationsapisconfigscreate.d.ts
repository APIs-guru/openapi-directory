import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigatewayProjectsLocationsApisConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigatewayProjectsLocationsApisConfigsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    apiConfigId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigatewayProjectsLocationsApisConfigsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigatewayProjectsLocationsApisConfigsCreateRequest extends SpeakeasyBase {
    pathParams: ApigatewayProjectsLocationsApisConfigsCreatePathParams;
    queryParams: ApigatewayProjectsLocationsApisConfigsCreateQueryParams;
    request?: shared.ApigatewayApiConfigInput;
    security: ApigatewayProjectsLocationsApisConfigsCreateSecurity;
}
export declare class ApigatewayProjectsLocationsApisConfigsCreateResponse extends SpeakeasyBase {
    apigatewayOperation?: shared.ApigatewayOperation;
    contentType: string;
    statusCode: number;
}
