import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRevisionsCountUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class GetRevisionsCountUsingPost200ApplicationJsonData extends SpeakeasyBase {
    revisions?: number;
}
export declare class GetRevisionsCountUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetRevisionsCountUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetRevisionsCountUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetRevisionsCountUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetRevisionsCountUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetRevisionsCountUsingPostRequest extends SpeakeasyBase {
    queryParams: GetRevisionsCountUsingPostQueryParams;
}
export declare class GetRevisionsCountUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRevisionsCountUsingPost200ApplicationJsonObject?: GetRevisionsCountUsingPost200ApplicationJson;
    getRevisionsCountUsingPost400ApplicationJsonObject?: GetRevisionsCountUsingPost400ApplicationJson;
    getRevisionsCountUsingPost401ApplicationJsonObject?: GetRevisionsCountUsingPost401ApplicationJson;
    getRevisionsCountUsingPost500ApplicationJsonObject?: GetRevisionsCountUsingPost500ApplicationJson;
}
