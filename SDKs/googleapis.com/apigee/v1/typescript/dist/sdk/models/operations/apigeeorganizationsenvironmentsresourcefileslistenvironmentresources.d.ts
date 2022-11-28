import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesPathParams extends SpeakeasyBase {
    parent: string;
    type: string;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams;
    security: ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListEnvironmentResourcesResponse?: shared.GoogleCloudApigeeV1ListEnvironmentResourcesResponse;
    statusCode: number;
}
