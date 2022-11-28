import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateDiffHtmlUsingPostQueryParams extends SpeakeasyBase {
    endRev?: string;
    padId?: string;
    startRev?: string;
}
export declare class CreateDiffHtmlUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingPostRequest extends SpeakeasyBase {
    queryParams: CreateDiffHtmlUsingPostQueryParams;
}
export declare class CreateDiffHtmlUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createDiffHtmlUsingPost200ApplicationJsonObject?: CreateDiffHtmlUsingPost200ApplicationJson;
    createDiffHtmlUsingPost400ApplicationJsonObject?: CreateDiffHtmlUsingPost400ApplicationJson;
    createDiffHtmlUsingPost401ApplicationJsonObject?: CreateDiffHtmlUsingPost401ApplicationJson;
    createDiffHtmlUsingPost500ApplicationJsonObject?: CreateDiffHtmlUsingPost500ApplicationJson;
}
