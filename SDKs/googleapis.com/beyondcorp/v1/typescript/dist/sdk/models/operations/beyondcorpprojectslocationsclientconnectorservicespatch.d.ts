import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsClientConnectorServicesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BeyondcorpProjectsLocationsClientConnectorServicesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    allowMissing?: boolean;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class BeyondcorpProjectsLocationsClientConnectorServicesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsClientConnectorServicesPatchRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsClientConnectorServicesPatchPathParams;
    queryParams: BeyondcorpProjectsLocationsClientConnectorServicesPatchQueryParams;
    request?: shared.ClientConnectorServiceInput;
    security: BeyondcorpProjectsLocationsClientConnectorServicesPatchSecurity;
}
export declare class BeyondcorpProjectsLocationsClientConnectorServicesPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
