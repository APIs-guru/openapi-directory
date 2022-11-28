import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AutomlProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsOperationsDeletePathParams;
    queryParams: AutomlProjectsLocationsOperationsDeleteQueryParams;
    security: AutomlProjectsLocationsOperationsDeleteSecurity;
}
export declare class AutomlProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
