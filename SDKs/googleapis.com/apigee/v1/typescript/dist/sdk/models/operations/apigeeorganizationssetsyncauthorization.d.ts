import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsSetSyncAuthorizationPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsSetSyncAuthorizationQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsSetSyncAuthorizationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsSetSyncAuthorizationRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsSetSyncAuthorizationPathParams;
    queryParams: ApigeeOrganizationsSetSyncAuthorizationQueryParams;
    request?: shared.GoogleCloudApigeeV1SyncAuthorization;
    security: ApigeeOrganizationsSetSyncAuthorizationSecurity;
}
export declare class ApigeeOrganizationsSetSyncAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1SyncAuthorization?: shared.GoogleCloudApigeeV1SyncAuthorization;
    statusCode: number;
}
