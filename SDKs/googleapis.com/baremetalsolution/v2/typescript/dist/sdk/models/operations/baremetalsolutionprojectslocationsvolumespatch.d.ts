import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsVolumesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BaremetalsolutionProjectsLocationsVolumesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BaremetalsolutionProjectsLocationsVolumesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsVolumesPatchRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsVolumesPatchPathParams;
    queryParams: BaremetalsolutionProjectsLocationsVolumesPatchQueryParams;
    request?: shared.VolumeInput;
    security: BaremetalsolutionProjectsLocationsVolumesPatchSecurity;
}
export declare class BaremetalsolutionProjectsLocationsVolumesPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
