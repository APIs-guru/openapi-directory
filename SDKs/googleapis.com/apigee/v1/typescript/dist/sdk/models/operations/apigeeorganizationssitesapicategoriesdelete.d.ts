import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsSitesApicategoriesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare enum ApigeeOrganizationsSitesApicategoriesDeleteRetentionEnum {
    DeletionRetentionUnspecified = "DELETION_RETENTION_UNSPECIFIED",
    Minimum = "MINIMUM"
}
export declare class ApigeeOrganizationsSitesApicategoriesDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    retention?: ApigeeOrganizationsSitesApicategoriesDeleteRetentionEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsSitesApicategoriesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsSitesApicategoriesDeleteRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsSitesApicategoriesDeletePathParams;
    queryParams: ApigeeOrganizationsSitesApicategoriesDeleteQueryParams;
    security: ApigeeOrganizationsSitesApicategoriesDeleteSecurity;
}
export declare class ApigeeOrganizationsSitesApicategoriesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ApiResponseWrapper?: shared.GoogleCloudApigeeV1ApiResponseWrapper;
    statusCode: number;
}
