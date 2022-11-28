import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsGetSyncAuthorizationPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsGetSyncAuthorizationQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsGetSyncAuthorizationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsGetSyncAuthorizationRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsGetSyncAuthorizationPathParams;
    queryParams: ApigeeOrganizationsGetSyncAuthorizationQueryParams;
    request?: Map<string, any>;
    security: ApigeeOrganizationsGetSyncAuthorizationSecurity;
}
export declare class ApigeeOrganizationsGetSyncAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1SyncAuthorization?: shared.GoogleCloudApigeeV1SyncAuthorization;
    statusCode: number;
}
