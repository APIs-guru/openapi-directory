import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BatchProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class BatchProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BatchProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: BatchProjectsLocationsOperationsListPathParams;
    queryParams: BatchProjectsLocationsOperationsListQueryParams;
    security: BatchProjectsLocationsOperationsListSecurity;
}
export declare class BatchProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
