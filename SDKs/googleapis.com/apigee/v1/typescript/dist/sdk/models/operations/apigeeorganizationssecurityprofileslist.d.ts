import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsSecurityProfilesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsSecurityProfilesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsSecurityProfilesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsSecurityProfilesListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsSecurityProfilesListPathParams;
    queryParams: ApigeeOrganizationsSecurityProfilesListQueryParams;
    security: ApigeeOrganizationsSecurityProfilesListSecurity;
}
export declare class ApigeeOrganizationsSecurityProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListSecurityProfilesResponse?: shared.GoogleCloudApigeeV1ListSecurityProfilesResponse;
    statusCode: number;
}
