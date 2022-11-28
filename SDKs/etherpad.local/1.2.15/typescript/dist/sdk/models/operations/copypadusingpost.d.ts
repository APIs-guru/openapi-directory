import { SpeakeasyBase } from "../../../internal/utils";
export declare class CopyPadUsingPostQueryParams extends SpeakeasyBase {
    destinationId?: string;
    force?: string;
    sourceId?: string;
}
export declare class CopyPadUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadUsingPostRequest extends SpeakeasyBase {
    queryParams: CopyPadUsingPostQueryParams;
}
export declare class CopyPadUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    copyPadUsingPost200ApplicationJsonObject?: CopyPadUsingPost200ApplicationJson;
    copyPadUsingPost400ApplicationJsonObject?: CopyPadUsingPost400ApplicationJson;
    copyPadUsingPost401ApplicationJsonObject?: CopyPadUsingPost401ApplicationJson;
    copyPadUsingPost500ApplicationJsonObject?: CopyPadUsingPost500ApplicationJson;
}
