import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    etag?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest extends SpeakeasyBase {
    pathParams: AssuredworkloadsOrganizationsLocationsWorkloadsDeletePathParams;
    queryParams: AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams;
    security: AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
