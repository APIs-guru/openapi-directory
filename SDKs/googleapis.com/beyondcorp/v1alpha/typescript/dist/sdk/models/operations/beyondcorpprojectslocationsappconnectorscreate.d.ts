import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsAppConnectorsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsAppConnectorsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    appConnectorId?: string;
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
export declare class BeyondcorpProjectsLocationsAppConnectorsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsAppConnectorsCreateRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsAppConnectorsCreatePathParams;
    queryParams: BeyondcorpProjectsLocationsAppConnectorsCreateQueryParams;
    request?: shared.GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInput;
    security: BeyondcorpProjectsLocationsAppConnectorsCreateSecurity;
}
export declare class BeyondcorpProjectsLocationsAppConnectorsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
