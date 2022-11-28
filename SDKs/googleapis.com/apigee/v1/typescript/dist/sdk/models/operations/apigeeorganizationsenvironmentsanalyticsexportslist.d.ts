import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsAnalyticsExportsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsAnalyticsExportsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsAnalyticsExportsListPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams;
    security: ApigeeOrganizationsEnvironmentsAnalyticsExportsListSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsAnalyticsExportsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListExportsResponse?: shared.GoogleCloudApigeeV1ListExportsResponse;
    statusCode: number;
}
