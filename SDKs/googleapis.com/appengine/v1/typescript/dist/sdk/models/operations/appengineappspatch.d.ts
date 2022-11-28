import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsPatchPathParams extends SpeakeasyBase {
    appsId: string;
}
export declare class AppengineAppsPatchQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsPatchRequest extends SpeakeasyBase {
    pathParams: AppengineAppsPatchPathParams;
    queryParams: AppengineAppsPatchQueryParams;
    request?: shared.Application;
    security: AppengineAppsPatchSecurity;
}
export declare class AppengineAppsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
