import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsNfsSharesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BaremetalsolutionProjectsLocationsNfsSharesCreateQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionProjectsLocationsNfsSharesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsNfsSharesCreateRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsNfsSharesCreatePathParams;
    queryParams: BaremetalsolutionProjectsLocationsNfsSharesCreateQueryParams;
    request?: shared.NfsShareInput;
    security: BaremetalsolutionProjectsLocationsNfsSharesCreateSecurity;
}
export declare class BaremetalsolutionProjectsLocationsNfsSharesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
