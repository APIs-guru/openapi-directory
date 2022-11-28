import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsDevelopersBalanceCreditPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsDevelopersBalanceCreditQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsDevelopersBalanceCreditSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsDevelopersBalanceCreditRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsDevelopersBalanceCreditPathParams;
    queryParams: ApigeeOrganizationsDevelopersBalanceCreditQueryParams;
    request?: shared.GoogleCloudApigeeV1CreditDeveloperBalanceRequest;
    security: ApigeeOrganizationsDevelopersBalanceCreditSecurity;
}
export declare class ApigeeOrganizationsDevelopersBalanceCreditResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1DeveloperBalance?: shared.GoogleCloudApigeeV1DeveloperBalance;
    statusCode: number;
}
