import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsDevelopersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsDevelopersCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsDevelopersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsDevelopersCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsDevelopersCreatePathParams;
    queryParams: ApigeeOrganizationsDevelopersCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1DeveloperInput;
    security: ApigeeOrganizationsDevelopersCreateSecurity;
}
export declare class ApigeeOrganizationsDevelopersCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1Developer?: shared.GoogleCloudApigeeV1Developer;
    statusCode: number;
}
