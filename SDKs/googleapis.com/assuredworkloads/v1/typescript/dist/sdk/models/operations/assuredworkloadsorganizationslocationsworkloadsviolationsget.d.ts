import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetQueryParams extends SpeakeasyBase {
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
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetRequest extends SpeakeasyBase {
    pathParams: AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetPathParams;
    queryParams: AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetQueryParams;
    security: AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetSecurity;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudAssuredworkloadsV1Violation?: shared.GoogleCloudAssuredworkloadsV1Violation;
    statusCode: number;
}
