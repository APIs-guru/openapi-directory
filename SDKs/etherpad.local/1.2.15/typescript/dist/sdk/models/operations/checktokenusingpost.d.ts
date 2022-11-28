import { SpeakeasyBase } from "../../../internal/utils";
export declare class CheckTokenUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CheckTokenUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CheckTokenUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CheckTokenUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CheckTokenUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    checkTokenUsingPost200ApplicationJsonObject?: CheckTokenUsingPost200ApplicationJson;
    checkTokenUsingPost400ApplicationJsonObject?: CheckTokenUsingPost400ApplicationJson;
    checkTokenUsingPost401ApplicationJsonObject?: CheckTokenUsingPost401ApplicationJson;
    checkTokenUsingPost500ApplicationJsonObject?: CheckTokenUsingPost500ApplicationJson;
}
