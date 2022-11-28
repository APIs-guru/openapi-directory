import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePadUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class DeletePadUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeletePadUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeletePadUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeletePadUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeletePadUsingGetRequest extends SpeakeasyBase {
    queryParams: DeletePadUsingGetQueryParams;
}
export declare class DeletePadUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deletePadUsingGet200ApplicationJsonObject?: DeletePadUsingGet200ApplicationJson;
    deletePadUsingGet400ApplicationJsonObject?: DeletePadUsingGet400ApplicationJson;
    deletePadUsingGet401ApplicationJsonObject?: DeletePadUsingGet401ApplicationJson;
    deletePadUsingGet500ApplicationJsonObject?: DeletePadUsingGet500ApplicationJson;
}
