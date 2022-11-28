import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsSecurityProfilesEnvironmentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsSecurityProfilesEnvironmentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsSecurityProfilesEnvironmentsCreatePathParams;
    queryParams: ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationInput;
    security: ApigeeOrganizationsSecurityProfilesEnvironmentsCreateSecurity;
}
export declare class ApigeeOrganizationsSecurityProfilesEnvironmentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1SecurityProfileEnvironmentAssociation?: shared.GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation;
    statusCode: number;
}
