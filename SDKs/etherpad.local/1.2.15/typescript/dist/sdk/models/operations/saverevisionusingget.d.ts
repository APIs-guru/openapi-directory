import { SpeakeasyBase } from "../../../internal/utils";
export declare class SaveRevisionUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
    rev?: string;
}
export declare class SaveRevisionUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingGetRequest extends SpeakeasyBase {
    queryParams: SaveRevisionUsingGetQueryParams;
}
export declare class SaveRevisionUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    saveRevisionUsingGet200ApplicationJsonObject?: SaveRevisionUsingGet200ApplicationJson;
    saveRevisionUsingGet400ApplicationJsonObject?: SaveRevisionUsingGet400ApplicationJson;
    saveRevisionUsingGet401ApplicationJsonObject?: SaveRevisionUsingGet401ApplicationJson;
    saveRevisionUsingGet500ApplicationJsonObject?: SaveRevisionUsingGet500ApplicationJson;
}
