import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListAllPadsUsingGet200ApplicationJsonData extends SpeakeasyBase {
    padIDs?: string[];
}
export declare class ListAllPadsUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListAllPadsUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class ListAllPadsUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAllPadsUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAllPadsUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAllPadsUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listAllPadsUsingGet200ApplicationJsonObject?: ListAllPadsUsingGet200ApplicationJson;
    listAllPadsUsingGet400ApplicationJsonObject?: ListAllPadsUsingGet400ApplicationJson;
    listAllPadsUsingGet401ApplicationJsonObject?: ListAllPadsUsingGet401ApplicationJson;
    listAllPadsUsingGet500ApplicationJsonObject?: ListAllPadsUsingGet500ApplicationJson;
}
