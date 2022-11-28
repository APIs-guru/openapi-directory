import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigatewayProjectsLocationsGatewaysPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigatewayProjectsLocationsGatewaysPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigatewayProjectsLocationsGatewaysPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigatewayProjectsLocationsGatewaysPatchRequest extends SpeakeasyBase {
    pathParams: ApigatewayProjectsLocationsGatewaysPatchPathParams;
    queryParams: ApigatewayProjectsLocationsGatewaysPatchQueryParams;
    request?: shared.ApigatewayGatewayInput;
    security: ApigatewayProjectsLocationsGatewaysPatchSecurity;
}
export declare class ApigatewayProjectsLocationsGatewaysPatchResponse extends SpeakeasyBase {
    apigatewayOperation?: shared.ApigatewayOperation;
    contentType: string;
    statusCode: number;
}
