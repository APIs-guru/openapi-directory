import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApikeysProjectsLocationsKeysPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApikeysProjectsLocationsKeysPatchQueryParams extends SpeakeasyBase {
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
export declare class ApikeysProjectsLocationsKeysPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApikeysProjectsLocationsKeysPatchRequest extends SpeakeasyBase {
    pathParams: ApikeysProjectsLocationsKeysPatchPathParams;
    queryParams: ApikeysProjectsLocationsKeysPatchQueryParams;
    request?: shared.V2Key;
    security: ApikeysProjectsLocationsKeysPatchSecurity;
}
export declare class ApikeysProjectsLocationsKeysPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
