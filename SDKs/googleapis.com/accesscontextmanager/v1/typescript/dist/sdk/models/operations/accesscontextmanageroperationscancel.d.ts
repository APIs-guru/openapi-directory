import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AccesscontextmanagerOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class AccesscontextmanagerOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerOperationsCancelRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerOperationsCancelPathParams;
    queryParams: AccesscontextmanagerOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: AccesscontextmanagerOperationsCancelSecurity;
}
export declare class AccesscontextmanagerOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
