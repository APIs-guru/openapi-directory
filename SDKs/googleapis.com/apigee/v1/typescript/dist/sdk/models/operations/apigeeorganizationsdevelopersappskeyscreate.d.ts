import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsDevelopersAppsKeysCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsDevelopersAppsKeysCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsDevelopersAppsKeysCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsDevelopersAppsKeysCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsDevelopersAppsKeysCreatePathParams;
    queryParams: ApigeeOrganizationsDevelopersAppsKeysCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1DeveloperAppKey;
    security: ApigeeOrganizationsDevelopersAppsKeysCreateSecurity;
}
export declare class ApigeeOrganizationsDevelopersAppsKeysCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1DeveloperAppKey?: shared.GoogleCloudApigeeV1DeveloperAppKey;
    statusCode: number;
}
