import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSavedRevisionsCountUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class GetSavedRevisionsCountUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingGetRequest extends SpeakeasyBase {
    queryParams: GetSavedRevisionsCountUsingGetQueryParams;
}
export declare class GetSavedRevisionsCountUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSavedRevisionsCountUsingGet200ApplicationJsonObject?: GetSavedRevisionsCountUsingGet200ApplicationJson;
    getSavedRevisionsCountUsingGet400ApplicationJsonObject?: GetSavedRevisionsCountUsingGet400ApplicationJson;
    getSavedRevisionsCountUsingGet401ApplicationJsonObject?: GetSavedRevisionsCountUsingGet401ApplicationJson;
    getSavedRevisionsCountUsingGet500ApplicationJsonObject?: GetSavedRevisionsCountUsingGet500ApplicationJson;
}
