import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    intervalEndTime?: string;
    intervalStartTime?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest extends SpeakeasyBase {
    pathParams: AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListPathParams;
    queryParams: AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams;
    security: AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudAssuredworkloadsV1ListViolationsResponse?: shared.GoogleCloudAssuredworkloadsV1ListViolationsResponse;
    statusCode: number;
}
