import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsSecurityReportsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsSecurityReportsCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsSecurityReportsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsSecurityReportsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsSecurityReportsCreatePathParams;
    queryParams: ApigeeOrganizationsEnvironmentsSecurityReportsCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1SecurityReportQuery;
    security: ApigeeOrganizationsEnvironmentsSecurityReportsCreateSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsSecurityReportsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1SecurityReport?: shared.GoogleCloudApigeeV1SecurityReport;
    statusCode: number;
}
