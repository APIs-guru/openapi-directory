import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsSitesApicategoriesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsSitesApicategoriesListQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsSitesApicategoriesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsSitesApicategoriesListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsSitesApicategoriesListPathParams;
    queryParams: ApigeeOrganizationsSitesApicategoriesListQueryParams;
    security: ApigeeOrganizationsSitesApicategoriesListSecurity;
}
export declare class ApigeeOrganizationsSitesApicategoriesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListApiCategoriesResponse?: shared.GoogleCloudApigeeV1ListApiCategoriesResponse;
    statusCode: number;
}
