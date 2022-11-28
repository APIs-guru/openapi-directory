import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsDevelopersAppsKeysCreateCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsDevelopersAppsKeysCreateCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsDevelopersAppsKeysCreateCreatePathParams;
    queryParams: ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1DeveloperAppKey;
    security: ApigeeOrganizationsDevelopersAppsKeysCreateCreateSecurity;
}
export declare class ApigeeOrganizationsDevelopersAppsKeysCreateCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1DeveloperAppKey?: shared.GoogleCloudApigeeV1DeveloperAppKey;
    statusCode: number;
}
