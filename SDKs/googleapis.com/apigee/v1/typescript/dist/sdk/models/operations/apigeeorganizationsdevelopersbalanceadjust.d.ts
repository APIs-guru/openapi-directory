import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsDevelopersBalanceAdjustPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsDevelopersBalanceAdjustQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsDevelopersBalanceAdjustSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsDevelopersBalanceAdjustRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsDevelopersBalanceAdjustPathParams;
    queryParams: ApigeeOrganizationsDevelopersBalanceAdjustQueryParams;
    request?: shared.GoogleCloudApigeeV1AdjustDeveloperBalanceRequest;
    security: ApigeeOrganizationsDevelopersBalanceAdjustSecurity;
}
export declare class ApigeeOrganizationsDevelopersBalanceAdjustResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1DeveloperBalance?: shared.GoogleCloudApigeeV1DeveloperBalance;
    statusCode: number;
}
