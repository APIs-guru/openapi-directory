import { SpeakeasyBase } from "../../../internal/utils";
export declare class CheckTokenUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CheckTokenUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CheckTokenUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CheckTokenUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CheckTokenUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    checkTokenUsingGet200ApplicationJsonObject?: CheckTokenUsingGet200ApplicationJson;
    checkTokenUsingGet400ApplicationJsonObject?: CheckTokenUsingGet400ApplicationJson;
    checkTokenUsingGet401ApplicationJsonObject?: CheckTokenUsingGet401ApplicationJson;
    checkTokenUsingGet500ApplicationJsonObject?: CheckTokenUsingGet500ApplicationJson;
}
