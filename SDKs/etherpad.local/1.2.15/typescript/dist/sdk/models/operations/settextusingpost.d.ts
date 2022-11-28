import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetTextUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
    text?: string;
}
export declare class SetTextUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetTextUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetTextUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetTextUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetTextUsingPostRequest extends SpeakeasyBase {
    queryParams: SetTextUsingPostQueryParams;
}
export declare class SetTextUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setTextUsingPost200ApplicationJsonObject?: SetTextUsingPost200ApplicationJson;
    setTextUsingPost400ApplicationJsonObject?: SetTextUsingPost400ApplicationJson;
    setTextUsingPost401ApplicationJsonObject?: SetTextUsingPost401ApplicationJson;
    setTextUsingPost500ApplicationJsonObject?: SetTextUsingPost500ApplicationJson;
}
