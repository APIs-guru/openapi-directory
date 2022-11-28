import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FileCommentListForPathPathParams extends SpeakeasyBase {
    path: string;
}
export declare class FileCommentListForPathQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class FileCommentListForPathRequest extends SpeakeasyBase {
    pathParams: FileCommentListForPathPathParams;
    queryParams: FileCommentListForPathQueryParams;
}
export declare class FileCommentListForPathResponse extends SpeakeasyBase {
    contentType: string;
    fileCommentEntities?: shared.FileCommentEntity[];
    statusCode: number;
}
