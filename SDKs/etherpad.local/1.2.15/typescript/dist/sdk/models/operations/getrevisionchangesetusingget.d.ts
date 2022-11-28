import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRevisionChangesetUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
    rev?: string;
}
export declare class GetRevisionChangesetUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingGetRequest extends SpeakeasyBase {
    queryParams: GetRevisionChangesetUsingGetQueryParams;
}
export declare class GetRevisionChangesetUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRevisionChangesetUsingGet200ApplicationJsonObject?: GetRevisionChangesetUsingGet200ApplicationJson;
    getRevisionChangesetUsingGet400ApplicationJsonObject?: GetRevisionChangesetUsingGet400ApplicationJson;
    getRevisionChangesetUsingGet401ApplicationJsonObject?: GetRevisionChangesetUsingGet401ApplicationJson;
    getRevisionChangesetUsingGet500ApplicationJsonObject?: GetRevisionChangesetUsingGet500ApplicationJson;
}
