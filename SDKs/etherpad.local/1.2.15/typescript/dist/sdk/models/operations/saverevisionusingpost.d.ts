import { SpeakeasyBase } from "../../../internal/utils";
export declare class SaveRevisionUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
    rev?: string;
}
export declare class SaveRevisionUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingPostRequest extends SpeakeasyBase {
    queryParams: SaveRevisionUsingPostQueryParams;
}
export declare class SaveRevisionUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    saveRevisionUsingPost200ApplicationJsonObject?: SaveRevisionUsingPost200ApplicationJson;
    saveRevisionUsingPost400ApplicationJsonObject?: SaveRevisionUsingPost400ApplicationJson;
    saveRevisionUsingPost401ApplicationJsonObject?: SaveRevisionUsingPost401ApplicationJson;
    saveRevisionUsingPost500ApplicationJsonObject?: SaveRevisionUsingPost500ApplicationJson;
}
