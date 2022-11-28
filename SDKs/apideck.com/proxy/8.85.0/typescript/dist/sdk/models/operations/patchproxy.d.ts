import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchProxyHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckDownstreamAuthorization?: string;
    xApideckDownstreamUrl: string;
    xApideckServiceId: string;
}
export declare class PatchProxySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PatchProxy401ApplicationJson extends SpeakeasyBase {
    detail?: string;
    error?: string;
    message?: string;
    ref?: string;
    statusCode?: number;
    typeName?: string;
}
export declare class PatchProxyRequest extends SpeakeasyBase {
    headers: PatchProxyHeaders;
    request?: Uint8Array;
    security: PatchProxySecurity;
}
export declare class PatchProxyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    patchProxy200ApplicationJsonAny?: any;
    patchProxy401ApplicationJsonObject?: PatchProxy401ApplicationJson;
    patchProxyDefaultApplicationJsonAny?: any;
}
