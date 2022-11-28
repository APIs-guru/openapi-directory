import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsGetProjectMappingPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsGetProjectMappingQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsGetProjectMappingSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsGetProjectMappingRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsGetProjectMappingPathParams;
    queryParams: ApigeeOrganizationsGetProjectMappingQueryParams;
    security: ApigeeOrganizationsGetProjectMappingSecurity;
}
export declare class ApigeeOrganizationsGetProjectMappingResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1OrganizationProjectMapping?: shared.GoogleCloudApigeeV1OrganizationProjectMapping;
    statusCode: number;
}
