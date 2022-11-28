import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetTextUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
    text?: string;
}
export declare class SetTextUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetTextUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetTextUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetTextUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetTextUsingGetRequest extends SpeakeasyBase {
    queryParams: SetTextUsingGetQueryParams;
}
export declare class SetTextUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setTextUsingGet200ApplicationJsonObject?: SetTextUsingGet200ApplicationJson;
    setTextUsingGet400ApplicationJsonObject?: SetTextUsingGet400ApplicationJson;
    setTextUsingGet401ApplicationJsonObject?: SetTextUsingGet401ApplicationJson;
    setTextUsingGet500ApplicationJsonObject?: SetTextUsingGet500ApplicationJson;
}
