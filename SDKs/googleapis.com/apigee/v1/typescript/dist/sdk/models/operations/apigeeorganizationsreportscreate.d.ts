import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsReportsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsReportsCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsReportsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsReportsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsReportsCreatePathParams;
    queryParams: ApigeeOrganizationsReportsCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1CustomReportInput;
    security: ApigeeOrganizationsReportsCreateSecurity;
}
export declare class ApigeeOrganizationsReportsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1CustomReport?: shared.GoogleCloudApigeeV1CustomReport;
    statusCode: number;
}
