import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeregistryProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeregistryProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsOperationsDeletePathParams;
    queryParams: ApigeeregistryProjectsLocationsOperationsDeleteQueryParams;
    security: ApigeeregistryProjectsLocationsOperationsDeleteSecurity;
}
export declare class ApigeeregistryProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
