import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsAnalyticsExportsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsAnalyticsExportsCreatePathParams;
    queryParams: ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1ExportRequest;
    security: ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1Export?: shared.GoogleCloudApigeeV1Export;
    statusCode: number;
}
