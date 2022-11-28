import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListPadsUsingPostQueryParams extends SpeakeasyBase {
    groupId?: string;
}
export declare class ListPadsUsingPost200ApplicationJsonData extends SpeakeasyBase {
    padIDs?: string[];
}
export declare class ListPadsUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListPadsUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class ListPadsUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListPadsUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListPadsUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListPadsUsingPostRequest extends SpeakeasyBase {
    queryParams: ListPadsUsingPostQueryParams;
}
export declare class ListPadsUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listPadsUsingPost200ApplicationJsonObject?: ListPadsUsingPost200ApplicationJson;
    listPadsUsingPost400ApplicationJsonObject?: ListPadsUsingPost400ApplicationJson;
    listPadsUsingPost401ApplicationJsonObject?: ListPadsUsingPost401ApplicationJson;
    listPadsUsingPost500ApplicationJsonObject?: ListPadsUsingPost500ApplicationJson;
}
