import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresPathParams extends SpeakeasyBase {
    profileEnvironment: string;
}
export declare class ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresPathParams;
    queryParams: ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams;
    request?: shared.GoogleCloudApigeeV1ComputeEnvironmentScoresRequest;
    security: ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresSecurity;
}
export declare class ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ComputeEnvironmentScoresResponse?: shared.GoogleCloudApigeeV1ComputeEnvironmentScoresResponse;
    statusCode: number;
}
