import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsSecurityProfilesListRevisionsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsSecurityProfilesListRevisionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsSecurityProfilesListRevisionsRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsSecurityProfilesListRevisionsPathParams;
    queryParams: ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams;
    security: ApigeeOrganizationsSecurityProfilesListRevisionsSecurity;
}
export declare class ApigeeOrganizationsSecurityProfilesListRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListSecurityProfileRevisionsResponse?: shared.GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse;
    statusCode: number;
}
