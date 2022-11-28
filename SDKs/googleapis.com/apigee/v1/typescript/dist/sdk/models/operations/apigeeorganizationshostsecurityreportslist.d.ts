import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsHostSecurityReportsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsHostSecurityReportsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dataset?: string;
    envgroupHostname?: string;
    fields?: string;
    from?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    status?: string;
    submittedBy?: string;
    to?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsHostSecurityReportsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsHostSecurityReportsListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsHostSecurityReportsListPathParams;
    queryParams: ApigeeOrganizationsHostSecurityReportsListQueryParams;
    security: ApigeeOrganizationsHostSecurityReportsListSecurity;
}
export declare class ApigeeOrganizationsHostSecurityReportsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListSecurityReportsResponse?: shared.GoogleCloudApigeeV1ListSecurityReportsResponse;
    statusCode: number;
}
