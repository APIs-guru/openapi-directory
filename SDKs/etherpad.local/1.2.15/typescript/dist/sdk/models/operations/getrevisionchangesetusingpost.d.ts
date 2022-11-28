import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRevisionChangesetUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
    rev?: string;
}
export declare class GetRevisionChangesetUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingPostRequest extends SpeakeasyBase {
    queryParams: GetRevisionChangesetUsingPostQueryParams;
}
export declare class GetRevisionChangesetUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRevisionChangesetUsingPost200ApplicationJsonObject?: GetRevisionChangesetUsingPost200ApplicationJson;
    getRevisionChangesetUsingPost400ApplicationJsonObject?: GetRevisionChangesetUsingPost400ApplicationJson;
    getRevisionChangesetUsingPost401ApplicationJsonObject?: GetRevisionChangesetUsingPost401ApplicationJson;
    getRevisionChangesetUsingPost500ApplicationJsonObject?: GetRevisionChangesetUsingPost500ApplicationJson;
}
