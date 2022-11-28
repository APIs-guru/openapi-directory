import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsSecurityReportsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dataset?: string;
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
export declare class ApigeeOrganizationsEnvironmentsSecurityReportsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsSecurityReportsListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsSecurityReportsListPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams;
    security: ApigeeOrganizationsEnvironmentsSecurityReportsListSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsSecurityReportsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListSecurityReportsResponse?: shared.GoogleCloudApigeeV1ListSecurityReportsResponse;
    statusCode: number;
}
