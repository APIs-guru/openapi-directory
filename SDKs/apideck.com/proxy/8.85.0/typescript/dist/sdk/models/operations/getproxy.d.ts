import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProxyHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckDownstreamAuthorization?: string;
    xApideckDownstreamUrl: string;
    xApideckServiceId: string;
}
export declare class GetProxySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetProxy401ApplicationJson extends SpeakeasyBase {
    detail?: string;
    error?: string;
    message?: string;
    ref?: string;
    statusCode?: number;
    typeName?: string;
}
export declare class GetProxyRequest extends SpeakeasyBase {
    headers: GetProxyHeaders;
    security: GetProxySecurity;
}
export declare class GetProxyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getProxy200ApplicationJsonAny?: any;
    getProxy401ApplicationJsonObject?: GetProxy401ApplicationJson;
    getProxyDefaultApplicationJsonAny?: any;
}
