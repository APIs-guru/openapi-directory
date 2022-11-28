import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListAllPadsUsingPost200ApplicationJsonData extends SpeakeasyBase {
    padIDs?: string[];
}
export declare class ListAllPadsUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListAllPadsUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class ListAllPadsUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAllPadsUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAllPadsUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAllPadsUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listAllPadsUsingPost200ApplicationJsonObject?: ListAllPadsUsingPost200ApplicationJson;
    listAllPadsUsingPost400ApplicationJsonObject?: ListAllPadsUsingPost400ApplicationJson;
    listAllPadsUsingPost401ApplicationJsonObject?: ListAllPadsUsingPost401ApplicationJson;
    listAllPadsUsingPost500ApplicationJsonObject?: ListAllPadsUsingPost500ApplicationJson;
}
