import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigPathParams extends SpeakeasyBase {
    connector: string;
}
export declare class BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigPathParams;
    queryParams: BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams;
    security: BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigSecurity;
}
export declare class BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigResponse extends SpeakeasyBase {
    contentType: string;
    resolveInstanceConfigResponse?: shared.ResolveInstanceConfigResponse;
    statusCode: number;
}
