import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeregistryProjectsLocationsListQueryParams extends SpeakeasyBase {
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
export declare class ApigeeregistryProjectsLocationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsListPathParams;
    queryParams: ApigeeregistryProjectsLocationsListQueryParams;
    security: ApigeeregistryProjectsLocationsListSecurity;
}
export declare class ApigeeregistryProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
