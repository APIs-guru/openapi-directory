import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigatewayProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigatewayProjectsLocationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigatewayProjectsLocationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigatewayProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: ApigatewayProjectsLocationsListPathParams;
    queryParams: ApigatewayProjectsLocationsListQueryParams;
    security: ApigatewayProjectsLocationsListSecurity;
}
export declare class ApigatewayProjectsLocationsListResponse extends SpeakeasyBase {
    apigatewayListLocationsResponse?: shared.ApigatewayListLocationsResponse;
    contentType: string;
    statusCode: number;
}
