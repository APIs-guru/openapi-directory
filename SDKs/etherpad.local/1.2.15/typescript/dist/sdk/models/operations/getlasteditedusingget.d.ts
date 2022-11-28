import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLastEditedUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class GetLastEditedUsingGet200ApplicationJsonData extends SpeakeasyBase {
    lastEdited?: number;
}
export declare class GetLastEditedUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetLastEditedUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetLastEditedUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetLastEditedUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetLastEditedUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetLastEditedUsingGetRequest extends SpeakeasyBase {
    queryParams: GetLastEditedUsingGetQueryParams;
}
export declare class GetLastEditedUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLastEditedUsingGet200ApplicationJsonObject?: GetLastEditedUsingGet200ApplicationJson;
    getLastEditedUsingGet400ApplicationJsonObject?: GetLastEditedUsingGet400ApplicationJson;
    getLastEditedUsingGet401ApplicationJsonObject?: GetLastEditedUsingGet401ApplicationJson;
    getLastEditedUsingGet500ApplicationJsonObject?: GetLastEditedUsingGet500ApplicationJson;
}
