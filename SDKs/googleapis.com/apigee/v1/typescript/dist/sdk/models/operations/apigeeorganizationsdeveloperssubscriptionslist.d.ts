import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsDevelopersSubscriptionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsDevelopersSubscriptionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    count?: number;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startKey?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsDevelopersSubscriptionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsDevelopersSubscriptionsListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsDevelopersSubscriptionsListPathParams;
    queryParams: ApigeeOrganizationsDevelopersSubscriptionsListQueryParams;
    security: ApigeeOrganizationsDevelopersSubscriptionsListSecurity;
}
export declare class ApigeeOrganizationsDevelopersSubscriptionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListDeveloperSubscriptionsResponse?: shared.GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse;
    statusCode: number;
}
