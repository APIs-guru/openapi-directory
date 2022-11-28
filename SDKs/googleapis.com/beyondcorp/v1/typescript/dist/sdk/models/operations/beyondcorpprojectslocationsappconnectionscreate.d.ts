import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsAppConnectionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    appConnectionId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class BeyondcorpProjectsLocationsAppConnectionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsAppConnectionsCreateRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsAppConnectionsCreatePathParams;
    queryParams: BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams;
    request?: shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput;
    security: BeyondcorpProjectsLocationsAppConnectionsCreateSecurity;
}
export declare class BeyondcorpProjectsLocationsAppConnectionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
