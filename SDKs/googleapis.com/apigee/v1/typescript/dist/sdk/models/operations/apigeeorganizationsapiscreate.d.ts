import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsApisCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsApisCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    action?: string;
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
    validate?: boolean;
}
export declare class ApigeeOrganizationsApisCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsApisCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsApisCreatePathParams;
    queryParams: ApigeeOrganizationsApisCreateQueryParams;
    request?: shared.GoogleApiHttpBody;
    security: ApigeeOrganizationsApisCreateSecurity;
}
export declare class ApigeeOrganizationsApisCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ApiProxyRevision?: shared.GoogleCloudApigeeV1ApiProxyRevision;
    statusCode: number;
}
