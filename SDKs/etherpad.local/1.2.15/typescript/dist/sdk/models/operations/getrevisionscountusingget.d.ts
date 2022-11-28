import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRevisionsCountUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class GetRevisionsCountUsingGet200ApplicationJsonData extends SpeakeasyBase {
    revisions?: number;
}
export declare class GetRevisionsCountUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetRevisionsCountUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetRevisionsCountUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetRevisionsCountUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetRevisionsCountUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetRevisionsCountUsingGetRequest extends SpeakeasyBase {
    queryParams: GetRevisionsCountUsingGetQueryParams;
}
export declare class GetRevisionsCountUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRevisionsCountUsingGet200ApplicationJsonObject?: GetRevisionsCountUsingGet200ApplicationJson;
    getRevisionsCountUsingGet400ApplicationJsonObject?: GetRevisionsCountUsingGet400ApplicationJson;
    getRevisionsCountUsingGet401ApplicationJsonObject?: GetRevisionsCountUsingGet401ApplicationJson;
    getRevisionsCountUsingGet500ApplicationJsonObject?: GetRevisionsCountUsingGet500ApplicationJson;
}
