import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsDevelopersAppsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsDevelopersAppsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    count?: string;
    expand?: boolean;
    fields?: string;
    includeCred?: boolean;
    key?: string;
    keyStatus?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    rows?: string;
    shallowExpand?: boolean;
    startKey?: string;
    status?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsDevelopersAppsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsDevelopersAppsListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsDevelopersAppsListPathParams;
    queryParams: ApigeeOrganizationsDevelopersAppsListQueryParams;
    security: ApigeeOrganizationsDevelopersAppsListSecurity;
}
export declare class ApigeeOrganizationsDevelopersAppsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListDeveloperAppsResponse?: shared.GoogleCloudApigeeV1ListDeveloperAppsResponse;
    statusCode: number;
}
