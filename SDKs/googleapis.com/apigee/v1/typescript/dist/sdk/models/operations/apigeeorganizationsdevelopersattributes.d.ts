import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsDevelopersAttributesPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsDevelopersAttributesQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsDevelopersAttributesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsDevelopersAttributesRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsDevelopersAttributesPathParams;
    queryParams: ApigeeOrganizationsDevelopersAttributesQueryParams;
    request?: shared.GoogleCloudApigeeV1Attributes;
    security: ApigeeOrganizationsDevelopersAttributesSecurity;
}
export declare class ApigeeOrganizationsDevelopersAttributesResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1Attributes?: shared.GoogleCloudApigeeV1Attributes;
    statusCode: number;
}
