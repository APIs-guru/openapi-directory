import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigatewayProjectsLocationsApisListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigatewayProjectsLocationsApisListQueryParams extends SpeakeasyBase {
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
export declare class ApigatewayProjectsLocationsApisListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigatewayProjectsLocationsApisListRequest extends SpeakeasyBase {
    pathParams: ApigatewayProjectsLocationsApisListPathParams;
    queryParams: ApigatewayProjectsLocationsApisListQueryParams;
    security: ApigatewayProjectsLocationsApisListSecurity;
}
export declare class ApigatewayProjectsLocationsApisListResponse extends SpeakeasyBase {
    apigatewayListApisResponse?: shared.ApigatewayListApisResponse;
    contentType: string;
    statusCode: number;
}
