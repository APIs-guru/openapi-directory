import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsConnectorsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BeyondcorpProjectsLocationsConnectorsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
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
export declare class BeyondcorpProjectsLocationsConnectorsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsConnectorsPatchRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsConnectorsPatchPathParams;
    queryParams: BeyondcorpProjectsLocationsConnectorsPatchQueryParams;
    request?: shared.ConnectorInput;
    security: BeyondcorpProjectsLocationsConnectorsPatchSecurity;
}
export declare class BeyondcorpProjectsLocationsConnectorsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
