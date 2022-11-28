import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsReportsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsReportsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    expand?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsReportsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsReportsListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsReportsListPathParams;
    queryParams: ApigeeOrganizationsReportsListQueryParams;
    security: ApigeeOrganizationsReportsListSecurity;
}
export declare class ApigeeOrganizationsReportsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListCustomReportsResponse?: shared.GoogleCloudApigeeV1ListCustomReportsResponse;
    statusCode: number;
}
