import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsClientConnectorServicesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsClientConnectorServicesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientConnectorServiceId?: string;
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
export declare class BeyondcorpProjectsLocationsClientConnectorServicesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsClientConnectorServicesCreateRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsClientConnectorServicesCreatePathParams;
    queryParams: BeyondcorpProjectsLocationsClientConnectorServicesCreateQueryParams;
    request?: shared.ClientConnectorServiceInput;
    security: BeyondcorpProjectsLocationsClientConnectorServicesCreateSecurity;
}
export declare class BeyondcorpProjectsLocationsClientConnectorServicesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
