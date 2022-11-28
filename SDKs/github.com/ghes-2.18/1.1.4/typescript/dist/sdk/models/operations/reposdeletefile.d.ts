import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposDeleteFilePathParams extends SpeakeasyBase {
    owner: string;
    path: string;
    repo: string;
}
/**
 * object containing information about the author.
**/
export declare class ReposDeleteFileRequestBodyAuthor extends SpeakeasyBase {
    email?: string;
    name?: string;
}
/**
 * object containing information about the committer.
**/
export declare class ReposDeleteFileRequestBodyCommitter extends SpeakeasyBase {
    email?: string;
    name?: string;
}
export declare class ReposDeleteFileRequestBody extends SpeakeasyBase {
    author?: ReposDeleteFileRequestBodyAuthor;
    branch?: string;
    committer?: ReposDeleteFileRequestBodyCommitter;
    message: string;
    sha: string;
}
export declare class ReposDeleteFile503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class ReposDeleteFileRequest extends SpeakeasyBase {
    pathParams: ReposDeleteFilePathParams;
    request?: ReposDeleteFileRequestBody;
}
export declare class ReposDeleteFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    fileCommit?: shared.FileCommit;
    reposDeleteFile503ApplicationJsonObject?: ReposDeleteFile503ApplicationJson;
    validationError?: shared.ValidationError;
}
