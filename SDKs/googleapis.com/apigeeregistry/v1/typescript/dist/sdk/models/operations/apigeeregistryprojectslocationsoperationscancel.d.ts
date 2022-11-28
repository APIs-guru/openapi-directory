import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeregistryProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class ApigeeregistryProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsOperationsCancelPathParams;
    queryParams: ApigeeregistryProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: ApigeeregistryProjectsLocationsOperationsCancelSecurity;
}
export declare class ApigeeregistryProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
