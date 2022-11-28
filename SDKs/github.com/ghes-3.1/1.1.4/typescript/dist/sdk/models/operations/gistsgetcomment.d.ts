import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsGetCommentPathParams extends SpeakeasyBase {
    commentId: number;
    gistId: string;
}
export declare class GistsGetComment403ApplicationJsonBlock extends SpeakeasyBase {
    createdAt?: string;
    htmlUrl?: string;
    reason?: string;
}
export declare class GistsGetComment403ApplicationJson extends SpeakeasyBase {
    block?: GistsGetComment403ApplicationJsonBlock;
    documentationUrl?: string;
    message?: string;
}
export declare class GistsGetCommentRequest extends SpeakeasyBase {
    pathParams: GistsGetCommentPathParams;
}
export declare class GistsGetCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    gistComment?: shared.GistComment;
    gistsGetComment403ApplicationJsonObject?: GistsGetComment403ApplicationJson;
}
