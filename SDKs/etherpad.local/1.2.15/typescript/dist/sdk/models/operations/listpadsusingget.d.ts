import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListPadsUsingGetQueryParams extends SpeakeasyBase {
    groupId?: string;
}
export declare class ListPadsUsingGet200ApplicationJsonData extends SpeakeasyBase {
    padIDs?: string[];
}
export declare class ListPadsUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListPadsUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class ListPadsUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListPadsUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListPadsUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListPadsUsingGetRequest extends SpeakeasyBase {
    queryParams: ListPadsUsingGetQueryParams;
}
export declare class ListPadsUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listPadsUsingGet200ApplicationJsonObject?: ListPadsUsingGet200ApplicationJson;
    listPadsUsingGet400ApplicationJsonObject?: ListPadsUsingGet400ApplicationJson;
    listPadsUsingGet401ApplicationJsonObject?: ListPadsUsingGet401ApplicationJson;
    listPadsUsingGet500ApplicationJsonObject?: ListPadsUsingGet500ApplicationJson;
}
