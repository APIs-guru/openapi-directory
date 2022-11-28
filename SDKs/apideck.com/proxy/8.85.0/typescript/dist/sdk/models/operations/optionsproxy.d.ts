import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OptionsProxyHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckDownstreamAuthorization?: string;
    xApideckDownstreamUrl: string;
    xApideckServiceId: string;
}
export declare class OptionsProxySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OptionsProxy401ApplicationJson extends SpeakeasyBase {
    detail?: string;
    error?: string;
    message?: string;
    ref?: string;
    statusCode?: number;
    typeName?: string;
}
export declare class OptionsProxyRequest extends SpeakeasyBase {
    headers: OptionsProxyHeaders;
    security: OptionsProxySecurity;
}
export declare class OptionsProxyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    optionsProxy200ApplicationJsonAny?: any;
    optionsProxy401ApplicationJsonObject?: OptionsProxy401ApplicationJson;
    optionsProxyDefaultApplicationJsonAny?: any;
}
