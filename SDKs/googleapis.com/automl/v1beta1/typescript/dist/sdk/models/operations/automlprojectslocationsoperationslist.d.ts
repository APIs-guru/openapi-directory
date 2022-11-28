import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AutomlProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsOperationsListPathParams;
    queryParams: AutomlProjectsLocationsOperationsListQueryParams;
    security: AutomlProjectsLocationsOperationsListSecurity;
}
export declare class AutomlProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
