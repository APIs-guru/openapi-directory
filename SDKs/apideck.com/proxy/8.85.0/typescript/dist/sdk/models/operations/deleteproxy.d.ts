import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProxyHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckDownstreamAuthorization?: string;
    xApideckDownstreamUrl: string;
    xApideckServiceId: string;
}
export declare class DeleteProxySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DeleteProxy401ApplicationJson extends SpeakeasyBase {
    detail?: string;
    error?: string;
    message?: string;
    ref?: string;
    statusCode?: number;
    typeName?: string;
}
export declare class DeleteProxyRequest extends SpeakeasyBase {
    headers: DeleteProxyHeaders;
    security: DeleteProxySecurity;
}
export declare class DeleteProxyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    deleteProxy200ApplicationJsonAny?: any;
    deleteProxy401ApplicationJsonObject?: DeleteProxy401ApplicationJson;
    deleteProxyDefaultApplicationJsonAny?: any;
}
