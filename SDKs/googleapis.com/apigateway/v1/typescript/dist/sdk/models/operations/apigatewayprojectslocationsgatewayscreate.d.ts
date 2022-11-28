import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigatewayProjectsLocationsGatewaysCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigatewayProjectsLocationsGatewaysCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    gatewayId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigatewayProjectsLocationsGatewaysCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigatewayProjectsLocationsGatewaysCreateRequest extends SpeakeasyBase {
    pathParams: ApigatewayProjectsLocationsGatewaysCreatePathParams;
    queryParams: ApigatewayProjectsLocationsGatewaysCreateQueryParams;
    request?: shared.ApigatewayGatewayInput;
    security: ApigatewayProjectsLocationsGatewaysCreateSecurity;
}
export declare class ApigatewayProjectsLocationsGatewaysCreateResponse extends SpeakeasyBase {
    apigatewayOperation?: shared.ApigatewayOperation;
    contentType: string;
    statusCode: number;
}
