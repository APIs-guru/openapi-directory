import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BeyondcorpProjectsLocationsListQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsListPathParams;
    queryParams: BeyondcorpProjectsLocationsListQueryParams;
    security: BeyondcorpProjectsLocationsListSecurity;
}
export declare class BeyondcorpProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudLocationListLocationsResponse?: shared.GoogleCloudLocationListLocationsResponse;
    statusCode: number;
}
