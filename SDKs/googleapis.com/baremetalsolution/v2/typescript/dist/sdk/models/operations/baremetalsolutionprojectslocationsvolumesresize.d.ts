import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsVolumesResizePathParams extends SpeakeasyBase {
    volume: string;
}
export declare class BaremetalsolutionProjectsLocationsVolumesResizeQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionProjectsLocationsVolumesResizeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsVolumesResizeRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsVolumesResizePathParams;
    queryParams: BaremetalsolutionProjectsLocationsVolumesResizeQueryParams;
    request?: shared.ResizeVolumeRequest;
    security: BaremetalsolutionProjectsLocationsVolumesResizeSecurity;
}
export declare class BaremetalsolutionProjectsLocationsVolumesResizeResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
