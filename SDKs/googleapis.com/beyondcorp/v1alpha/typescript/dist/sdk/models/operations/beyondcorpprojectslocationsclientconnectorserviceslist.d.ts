import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsClientConnectorServicesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsClientConnectorServicesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsClientConnectorServicesListRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsClientConnectorServicesListPathParams;
    queryParams: BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams;
    security: BeyondcorpProjectsLocationsClientConnectorServicesListSecurity;
}
export declare class BeyondcorpProjectsLocationsClientConnectorServicesListResponse extends SpeakeasyBase {
    contentType: string;
    listClientConnectorServicesResponse?: shared.ListClientConnectorServicesResponse;
    statusCode: number;
}
