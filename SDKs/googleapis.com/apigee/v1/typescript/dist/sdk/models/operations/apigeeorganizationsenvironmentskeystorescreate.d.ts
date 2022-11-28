import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsKeystoresCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEnvironmentsKeystoresCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsKeystoresCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsKeystoresCreatePathParams;
    queryParams: ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1KeystoreInput;
    security: ApigeeOrganizationsEnvironmentsKeystoresCreateSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsKeystoresCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1Keystore?: shared.GoogleCloudApigeeV1Keystore;
    statusCode: number;
}
