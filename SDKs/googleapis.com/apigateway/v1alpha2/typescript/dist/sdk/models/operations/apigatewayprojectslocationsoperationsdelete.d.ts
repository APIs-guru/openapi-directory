import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigatewayProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigatewayProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigatewayProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigatewayProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: ApigatewayProjectsLocationsOperationsDeletePathParams;
    queryParams: ApigatewayProjectsLocationsOperationsDeleteQueryParams;
    security: ApigatewayProjectsLocationsOperationsDeleteSecurity;
}
export declare class ApigatewayProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
