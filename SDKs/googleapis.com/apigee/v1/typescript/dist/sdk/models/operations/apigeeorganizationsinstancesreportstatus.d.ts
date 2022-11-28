import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsInstancesReportStatusPathParams extends SpeakeasyBase {
    instance: string;
}
export declare class ApigeeOrganizationsInstancesReportStatusQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsInstancesReportStatusSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsInstancesReportStatusRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsInstancesReportStatusPathParams;
    queryParams: ApigeeOrganizationsInstancesReportStatusQueryParams;
    request?: shared.GoogleCloudApigeeV1ReportInstanceStatusRequest;
    security: ApigeeOrganizationsInstancesReportStatusSecurity;
}
export declare class ApigeeOrganizationsInstancesReportStatusResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ReportInstanceStatusResponse?: Map<string, any>;
    statusCode: number;
}
