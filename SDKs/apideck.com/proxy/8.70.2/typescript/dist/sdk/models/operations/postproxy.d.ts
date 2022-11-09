import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostProxyHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckDownstreamAuthorization?: string;
    xApideckDownstreamUrl: string;
    xApideckServiceId: string;
}
export declare class PostProxySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PostProxyRequest extends SpeakeasyBase {
    headers: PostProxyHeaders;
    request?: Uint8Array;
    security: PostProxySecurity;
}
export declare class PostProxy401ApplicationJson extends SpeakeasyBase {
    detail?: string;
    error?: string;
    message?: string;
    ref?: string;
    statusCode?: number;
    typeName?: string;
}
export declare class PostProxyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    postProxy200ApplicationJsonAny?: any;
    postProxy401ApplicationJsonObject?: PostProxy401ApplicationJson;
    postProxyDefaultApplicationJsonAny?: any;
}
