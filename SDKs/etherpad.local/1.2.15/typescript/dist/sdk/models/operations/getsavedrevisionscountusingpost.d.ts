import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSavedRevisionsCountUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class GetSavedRevisionsCountUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingPostRequest extends SpeakeasyBase {
    queryParams: GetSavedRevisionsCountUsingPostQueryParams;
}
export declare class GetSavedRevisionsCountUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSavedRevisionsCountUsingPost200ApplicationJsonObject?: GetSavedRevisionsCountUsingPost200ApplicationJson;
    getSavedRevisionsCountUsingPost400ApplicationJsonObject?: GetSavedRevisionsCountUsingPost400ApplicationJson;
    getSavedRevisionsCountUsingPost401ApplicationJsonObject?: GetSavedRevisionsCountUsingPost401ApplicationJson;
    getSavedRevisionsCountUsingPost500ApplicationJsonObject?: GetSavedRevisionsCountUsingPost500ApplicationJson;
}
