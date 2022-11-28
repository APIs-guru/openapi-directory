import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsInstancesStopPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BaremetalsolutionProjectsLocationsInstancesStopQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionProjectsLocationsInstancesStopSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsInstancesStopRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsInstancesStopPathParams;
    queryParams: BaremetalsolutionProjectsLocationsInstancesStopQueryParams;
    request?: Map<string, any>;
    security: BaremetalsolutionProjectsLocationsInstancesStopSecurity;
}
export declare class BaremetalsolutionProjectsLocationsInstancesStopResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
