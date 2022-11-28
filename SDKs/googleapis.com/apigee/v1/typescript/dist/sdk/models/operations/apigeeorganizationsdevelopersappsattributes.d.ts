import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsDevelopersAppsAttributesPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsDevelopersAppsAttributesQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsDevelopersAppsAttributesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsDevelopersAppsAttributesRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsDevelopersAppsAttributesPathParams;
    queryParams: ApigeeOrganizationsDevelopersAppsAttributesQueryParams;
    request?: shared.GoogleCloudApigeeV1Attributes;
    security: ApigeeOrganizationsDevelopersAppsAttributesSecurity;
}
export declare class ApigeeOrganizationsDevelopersAppsAttributesResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1Attributes?: shared.GoogleCloudApigeeV1Attributes;
    statusCode: number;
}
