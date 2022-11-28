import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsReportsUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsReportsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    ignoreExpiryValidation?: boolean;
    ignoreNewlineValidation?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsReportsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsReportsUpdateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsReportsUpdatePathParams;
    queryParams: ApigeeOrganizationsReportsUpdateQueryParams;
    request?: shared.GoogleCloudApigeeV1CustomReportInput;
    security: ApigeeOrganizationsReportsUpdateSecurity;
}
export declare class ApigeeOrganizationsReportsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1CustomReport?: shared.GoogleCloudApigeeV1CustomReport;
    statusCode: number;
}
