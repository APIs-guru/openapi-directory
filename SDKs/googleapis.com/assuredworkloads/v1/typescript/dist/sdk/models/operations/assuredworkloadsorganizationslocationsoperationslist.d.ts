import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssuredworkloadsOrganizationsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AssuredworkloadsOrganizationsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class AssuredworkloadsOrganizationsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AssuredworkloadsOrganizationsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: AssuredworkloadsOrganizationsLocationsOperationsListPathParams;
    queryParams: AssuredworkloadsOrganizationsLocationsOperationsListQueryParams;
    security: AssuredworkloadsOrganizationsLocationsOperationsListSecurity;
}
export declare class AssuredworkloadsOrganizationsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningListOperationsResponse?: shared.GoogleLongrunningListOperationsResponse;
    statusCode: number;
}
