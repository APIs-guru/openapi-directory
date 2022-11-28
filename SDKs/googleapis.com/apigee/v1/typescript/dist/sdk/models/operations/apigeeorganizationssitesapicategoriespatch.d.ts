import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsSitesApicategoriesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsSitesApicategoriesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsSitesApicategoriesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsSitesApicategoriesPatchRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsSitesApicategoriesPatchPathParams;
    queryParams: ApigeeOrganizationsSitesApicategoriesPatchQueryParams;
    request?: shared.GoogleCloudApigeeV1ApiCategoryData;
    security: ApigeeOrganizationsSitesApicategoriesPatchSecurity;
}
export declare class ApigeeOrganizationsSitesApicategoriesPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ApiCategory?: shared.GoogleCloudApigeeV1ApiCategory;
    statusCode: number;
}
