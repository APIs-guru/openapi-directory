import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest extends SpeakeasyBase {
    pathParams: AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesPathParams;
    queryParams: AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams;
    request?: shared.GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest;
    security: AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse?: Map<string, any>;
    statusCode: number;
}
