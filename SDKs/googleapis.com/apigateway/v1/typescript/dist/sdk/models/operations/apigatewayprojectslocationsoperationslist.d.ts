import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigatewayProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigatewayProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class ApigatewayProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigatewayProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: ApigatewayProjectsLocationsOperationsListPathParams;
    queryParams: ApigatewayProjectsLocationsOperationsListQueryParams;
    security: ApigatewayProjectsLocationsOperationsListSecurity;
}
export declare class ApigatewayProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    apigatewayListOperationsResponse?: shared.ApigatewayListOperationsResponse;
    contentType: string;
    statusCode: number;
}
