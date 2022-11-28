import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    externalId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest extends SpeakeasyBase {
    pathParams: AssuredworkloadsOrganizationsLocationsWorkloadsCreatePathParams;
    queryParams: AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams;
    request?: shared.GoogleCloudAssuredworkloadsV1WorkloadInput;
    security: AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
