import { SpeakeasyBase } from "../../../internal/utils";
export declare class MovePadUsingPostQueryParams extends SpeakeasyBase {
    destinationId?: string;
    force?: string;
    sourceId?: string;
}
export declare class MovePadUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class MovePadUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class MovePadUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class MovePadUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class MovePadUsingPostRequest extends SpeakeasyBase {
    queryParams: MovePadUsingPostQueryParams;
}
export declare class MovePadUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    movePadUsingPost200ApplicationJsonObject?: MovePadUsingPost200ApplicationJson;
    movePadUsingPost400ApplicationJsonObject?: MovePadUsingPost400ApplicationJson;
    movePadUsingPost401ApplicationJsonObject?: MovePadUsingPost401ApplicationJson;
    movePadUsingPost500ApplicationJsonObject?: MovePadUsingPost500ApplicationJson;
}
