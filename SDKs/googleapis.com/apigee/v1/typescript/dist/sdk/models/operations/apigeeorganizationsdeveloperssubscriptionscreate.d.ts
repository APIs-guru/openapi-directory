import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsDevelopersSubscriptionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsDevelopersSubscriptionsCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsDevelopersSubscriptionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsDevelopersSubscriptionsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsDevelopersSubscriptionsCreatePathParams;
    queryParams: ApigeeOrganizationsDevelopersSubscriptionsCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1DeveloperSubscriptionInput;
    security: ApigeeOrganizationsDevelopersSubscriptionsCreateSecurity;
}
export declare class ApigeeOrganizationsDevelopersSubscriptionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1DeveloperSubscription?: shared.GoogleCloudApigeeV1DeveloperSubscription;
    statusCode: number;
}
