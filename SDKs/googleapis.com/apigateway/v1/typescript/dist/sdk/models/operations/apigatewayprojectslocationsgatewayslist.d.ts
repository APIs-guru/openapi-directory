import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigatewayProjectsLocationsGatewaysListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigatewayProjectsLocationsGatewaysListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigatewayProjectsLocationsGatewaysListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigatewayProjectsLocationsGatewaysListRequest extends SpeakeasyBase {
    pathParams: ApigatewayProjectsLocationsGatewaysListPathParams;
    queryParams: ApigatewayProjectsLocationsGatewaysListQueryParams;
    security: ApigatewayProjectsLocationsGatewaysListSecurity;
}
export declare class ApigatewayProjectsLocationsGatewaysListResponse extends SpeakeasyBase {
    apigatewayListGatewaysResponse?: shared.ApigatewayListGatewaysResponse;
    contentType: string;
    statusCode: number;
}
