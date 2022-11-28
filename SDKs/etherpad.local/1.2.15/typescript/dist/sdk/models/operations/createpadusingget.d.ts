import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePadUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
    text?: string;
}
export declare class CreatePadUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreatePadUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreatePadUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreatePadUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreatePadUsingGetRequest extends SpeakeasyBase {
    queryParams: CreatePadUsingGetQueryParams;
}
export declare class CreatePadUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createPadUsingGet200ApplicationJsonObject?: CreatePadUsingGet200ApplicationJson;
    createPadUsingGet400ApplicationJsonObject?: CreatePadUsingGet400ApplicationJson;
    createPadUsingGet401ApplicationJsonObject?: CreatePadUsingGet401ApplicationJson;
    createPadUsingGet500ApplicationJsonObject?: CreatePadUsingGet500ApplicationJson;
}
