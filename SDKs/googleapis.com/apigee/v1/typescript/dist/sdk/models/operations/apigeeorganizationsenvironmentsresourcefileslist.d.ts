import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsResourcefilesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    type?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsResourcefilesListPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams;
    security: ApigeeOrganizationsEnvironmentsResourcefilesListSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListEnvironmentResourcesResponse?: shared.GoogleCloudApigeeV1ListEnvironmentResourcesResponse;
    statusCode: number;
}
