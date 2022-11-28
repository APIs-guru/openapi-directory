import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppendTextUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
    text?: string;
}
export declare class AppendTextUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendTextUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendTextUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendTextUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendTextUsingGetRequest extends SpeakeasyBase {
    queryParams: AppendTextUsingGetQueryParams;
}
export declare class AppendTextUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appendTextUsingGet200ApplicationJsonObject?: AppendTextUsingGet200ApplicationJson;
    appendTextUsingGet400ApplicationJsonObject?: AppendTextUsingGet400ApplicationJson;
    appendTextUsingGet401ApplicationJsonObject?: AppendTextUsingGet401ApplicationJson;
    appendTextUsingGet500ApplicationJsonObject?: AppendTextUsingGet500ApplicationJson;
}
