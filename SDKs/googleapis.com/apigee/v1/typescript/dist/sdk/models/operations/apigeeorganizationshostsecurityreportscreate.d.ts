import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsHostSecurityReportsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsHostSecurityReportsCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsHostSecurityReportsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsHostSecurityReportsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsHostSecurityReportsCreatePathParams;
    queryParams: ApigeeOrganizationsHostSecurityReportsCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1SecurityReportQuery;
    security: ApigeeOrganizationsHostSecurityReportsCreateSecurity;
}
export declare class ApigeeOrganizationsHostSecurityReportsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1SecurityReport?: shared.GoogleCloudApigeeV1SecurityReport;
    statusCode: number;
}
