import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsInstancesResetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BaremetalsolutionProjectsLocationsInstancesResetQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionProjectsLocationsInstancesResetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsInstancesResetRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsInstancesResetPathParams;
    queryParams: BaremetalsolutionProjectsLocationsInstancesResetQueryParams;
    request?: Map<string, any>;
    security: BaremetalsolutionProjectsLocationsInstancesResetSecurity;
}
export declare class BaremetalsolutionProjectsLocationsInstancesResetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
