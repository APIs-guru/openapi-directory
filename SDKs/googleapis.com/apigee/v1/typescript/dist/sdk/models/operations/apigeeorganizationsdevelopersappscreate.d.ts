import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsDevelopersAppsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsDevelopersAppsCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsDevelopersAppsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsDevelopersAppsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsDevelopersAppsCreatePathParams;
    queryParams: ApigeeOrganizationsDevelopersAppsCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1DeveloperAppInput;
    security: ApigeeOrganizationsDevelopersAppsCreateSecurity;
}
export declare class ApigeeOrganizationsDevelopersAppsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1DeveloperApp?: shared.GoogleCloudApigeeV1DeveloperApp;
    statusCode: number;
}
