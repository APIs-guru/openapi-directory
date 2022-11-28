import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsSitesApicategoriesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsSitesApicategoriesCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsSitesApicategoriesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsSitesApicategoriesCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsSitesApicategoriesCreatePathParams;
    queryParams: ApigeeOrganizationsSitesApicategoriesCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1ApiCategoryData;
    security: ApigeeOrganizationsSitesApicategoriesCreateSecurity;
}
export declare class ApigeeOrganizationsSitesApicategoriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ApiCategory?: shared.GoogleCloudApigeeV1ApiCategory;
    statusCode: number;
}
