import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum AccesscontextmanagerOperationsGetAccessLevelFormatEnum {
    LevelFormatUnspecified = "LEVEL_FORMAT_UNSPECIFIED",
    AsDefined = "AS_DEFINED",
    Cel = "CEL"
}
export declare class AccesscontextmanagerOperationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessLevelFormat?: AccesscontextmanagerOperationsGetAccessLevelFormatEnum;
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
export declare class AccesscontextmanagerOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerOperationsGetRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerOperationsGetPathParams;
    queryParams: AccesscontextmanagerOperationsGetQueryParams;
    security: AccesscontextmanagerOperationsGetSecurity;
}
export declare class AccesscontextmanagerOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
