import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePadUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
    text?: string;
}
export declare class CreatePadUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreatePadUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreatePadUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreatePadUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreatePadUsingPostRequest extends SpeakeasyBase {
    queryParams: CreatePadUsingPostQueryParams;
}
export declare class CreatePadUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createPadUsingPost200ApplicationJsonObject?: CreatePadUsingPost200ApplicationJson;
    createPadUsingPost400ApplicationJsonObject?: CreatePadUsingPost400ApplicationJson;
    createPadUsingPost401ApplicationJsonObject?: CreatePadUsingPost401ApplicationJson;
    createPadUsingPost500ApplicationJsonObject?: CreatePadUsingPost500ApplicationJson;
}
