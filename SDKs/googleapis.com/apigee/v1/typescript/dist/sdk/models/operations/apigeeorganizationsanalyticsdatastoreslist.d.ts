import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsAnalyticsDatastoresListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsAnalyticsDatastoresListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    targetType?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsAnalyticsDatastoresListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsAnalyticsDatastoresListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsAnalyticsDatastoresListPathParams;
    queryParams: ApigeeOrganizationsAnalyticsDatastoresListQueryParams;
    security: ApigeeOrganizationsAnalyticsDatastoresListSecurity;
}
export declare class ApigeeOrganizationsAnalyticsDatastoresListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListDatastoresResponse?: shared.GoogleCloudApigeeV1ListDatastoresResponse;
    statusCode: number;
}
