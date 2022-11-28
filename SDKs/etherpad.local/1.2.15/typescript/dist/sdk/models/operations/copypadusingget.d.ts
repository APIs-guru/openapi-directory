import { SpeakeasyBase } from "../../../internal/utils";
export declare class CopyPadUsingGetQueryParams extends SpeakeasyBase {
    destinationId?: string;
    force?: string;
    sourceId?: string;
}
export declare class CopyPadUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadUsingGetRequest extends SpeakeasyBase {
    queryParams: CopyPadUsingGetQueryParams;
}
export declare class CopyPadUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    copyPadUsingGet200ApplicationJsonObject?: CopyPadUsingGet200ApplicationJson;
    copyPadUsingGet400ApplicationJsonObject?: CopyPadUsingGet400ApplicationJson;
    copyPadUsingGet401ApplicationJsonObject?: CopyPadUsingGet401ApplicationJson;
    copyPadUsingGet500ApplicationJsonObject?: CopyPadUsingGet500ApplicationJson;
}
