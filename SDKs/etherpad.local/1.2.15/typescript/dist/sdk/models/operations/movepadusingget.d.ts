import { SpeakeasyBase } from "../../../internal/utils";
export declare class MovePadUsingGetQueryParams extends SpeakeasyBase {
    destinationId?: string;
    force?: string;
    sourceId?: string;
}
export declare class MovePadUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class MovePadUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class MovePadUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class MovePadUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class MovePadUsingGetRequest extends SpeakeasyBase {
    queryParams: MovePadUsingGetQueryParams;
}
export declare class MovePadUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    movePadUsingGet200ApplicationJsonObject?: MovePadUsingGet200ApplicationJson;
    movePadUsingGet400ApplicationJsonObject?: MovePadUsingGet400ApplicationJson;
    movePadUsingGet401ApplicationJsonObject?: MovePadUsingGet401ApplicationJson;
    movePadUsingGet500ApplicationJsonObject?: MovePadUsingGet500ApplicationJson;
}
