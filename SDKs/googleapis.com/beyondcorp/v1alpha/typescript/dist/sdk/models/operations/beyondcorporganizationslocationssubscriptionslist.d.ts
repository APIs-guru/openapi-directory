import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpOrganizationsLocationsSubscriptionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpOrganizationsLocationsSubscriptionsListQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpOrganizationsLocationsSubscriptionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpOrganizationsLocationsSubscriptionsListRequest extends SpeakeasyBase {
    pathParams: BeyondcorpOrganizationsLocationsSubscriptionsListPathParams;
    queryParams: BeyondcorpOrganizationsLocationsSubscriptionsListQueryParams;
    security: BeyondcorpOrganizationsLocationsSubscriptionsListSecurity;
}
export declare class BeyondcorpOrganizationsLocationsSubscriptionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse?: shared.GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse;
    statusCode: number;
}
