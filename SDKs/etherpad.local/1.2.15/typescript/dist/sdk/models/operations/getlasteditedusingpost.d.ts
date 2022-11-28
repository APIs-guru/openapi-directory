import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLastEditedUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class GetLastEditedUsingPost200ApplicationJsonData extends SpeakeasyBase {
    lastEdited?: number;
}
export declare class GetLastEditedUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetLastEditedUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetLastEditedUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetLastEditedUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetLastEditedUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetLastEditedUsingPostRequest extends SpeakeasyBase {
    queryParams: GetLastEditedUsingPostQueryParams;
}
export declare class GetLastEditedUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLastEditedUsingPost200ApplicationJsonObject?: GetLastEditedUsingPost200ApplicationJson;
    getLastEditedUsingPost400ApplicationJsonObject?: GetLastEditedUsingPost400ApplicationJson;
    getLastEditedUsingPost401ApplicationJsonObject?: GetLastEditedUsingPost401ApplicationJson;
    getLastEditedUsingPost500ApplicationJsonObject?: GetLastEditedUsingPost500ApplicationJson;
}
