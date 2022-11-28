import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppendTextUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
    text?: string;
}
export declare class AppendTextUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendTextUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendTextUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendTextUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendTextUsingPostRequest extends SpeakeasyBase {
    queryParams: AppendTextUsingPostQueryParams;
}
export declare class AppendTextUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appendTextUsingPost200ApplicationJsonObject?: AppendTextUsingPost200ApplicationJson;
    appendTextUsingPost400ApplicationJsonObject?: AppendTextUsingPost400ApplicationJson;
    appendTextUsingPost401ApplicationJsonObject?: AppendTextUsingPost401ApplicationJson;
    appendTextUsingPost500ApplicationJsonObject?: AppendTextUsingPost500ApplicationJson;
}
