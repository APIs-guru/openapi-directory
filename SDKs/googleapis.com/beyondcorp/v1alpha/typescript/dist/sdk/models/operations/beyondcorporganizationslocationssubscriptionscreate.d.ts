import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpOrganizationsLocationsSubscriptionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpOrganizationsLocationsSubscriptionsCreateQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpOrganizationsLocationsSubscriptionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpOrganizationsLocationsSubscriptionsCreateRequest extends SpeakeasyBase {
    pathParams: BeyondcorpOrganizationsLocationsSubscriptionsCreatePathParams;
    queryParams: BeyondcorpOrganizationsLocationsSubscriptionsCreateQueryParams;
    request?: shared.GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput;
    security: BeyondcorpOrganizationsLocationsSubscriptionsCreateSecurity;
}
export declare class BeyondcorpOrganizationsLocationsSubscriptionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription?: shared.GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription;
    statusCode: number;
}
