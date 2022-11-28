import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsolePathParams extends SpeakeasyBase {
    name: string;
}
export declare class BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsolePathParams;
    queryParams: BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams;
    request?: Map<string, any>;
    security: BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity;
}
export declare class BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
