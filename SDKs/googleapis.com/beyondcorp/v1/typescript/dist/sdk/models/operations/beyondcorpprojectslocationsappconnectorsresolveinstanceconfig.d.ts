import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigPathParams extends SpeakeasyBase {
    appConnector: string;
}
export declare class BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigPathParams;
    queryParams: BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams;
    security: BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity;
}
export declare class BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse?: shared.GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse;
    statusCode: number;
}
