import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsInstancesStartPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BaremetalsolutionProjectsLocationsInstancesStartQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionProjectsLocationsInstancesStartSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsInstancesStartRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsInstancesStartPathParams;
    queryParams: BaremetalsolutionProjectsLocationsInstancesStartQueryParams;
    request?: Map<string, any>;
    security: BaremetalsolutionProjectsLocationsInstancesStartSecurity;
}
export declare class BaremetalsolutionProjectsLocationsInstancesStartResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
