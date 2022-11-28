import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePadUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class DeletePadUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeletePadUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeletePadUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeletePadUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeletePadUsingPostRequest extends SpeakeasyBase {
    queryParams: DeletePadUsingPostQueryParams;
}
export declare class DeletePadUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deletePadUsingPost200ApplicationJsonObject?: DeletePadUsingPost200ApplicationJson;
    deletePadUsingPost400ApplicationJsonObject?: DeletePadUsingPost400ApplicationJson;
    deletePadUsingPost401ApplicationJsonObject?: DeletePadUsingPost401ApplicationJson;
    deletePadUsingPost500ApplicationJsonObject?: DeletePadUsingPost500ApplicationJson;
}
