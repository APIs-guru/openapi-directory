import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateDiffHtmlUsingGetQueryParams extends SpeakeasyBase {
    endRev?: string;
    padId?: string;
    startRev?: string;
}
export declare class CreateDiffHtmlUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingGetRequest extends SpeakeasyBase {
    queryParams: CreateDiffHtmlUsingGetQueryParams;
}
export declare class CreateDiffHtmlUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createDiffHtmlUsingGet200ApplicationJsonObject?: CreateDiffHtmlUsingGet200ApplicationJson;
    createDiffHtmlUsingGet400ApplicationJsonObject?: CreateDiffHtmlUsingGet400ApplicationJson;
    createDiffHtmlUsingGet401ApplicationJsonObject?: CreateDiffHtmlUsingGet401ApplicationJson;
    createDiffHtmlUsingGet500ApplicationJsonObject?: CreateDiffHtmlUsingGet500ApplicationJson;
}
