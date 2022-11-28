import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GitCreateCommitPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
/**
 * Information about the author of the commit. By default, the `author` will be the authenticated user and the current date. See the `author` and `committer` object below for details.
**/
export declare class GitCreateCommitRequestBodyAuthor extends SpeakeasyBase {
    date?: string;
    email?: string;
    name?: string;
}
/**
 * Information about the person who is making the commit. By default, `committer` will use the information set in `author`. See the `author` and `committer` object below for details.
**/
export declare class GitCreateCommitRequestBodyCommitter extends SpeakeasyBase {
    date?: string;
    email?: string;
    name?: string;
}
export declare class GitCreateCommitRequestBody extends SpeakeasyBase {
    author?: GitCreateCommitRequestBodyAuthor;
    committer?: GitCreateCommitRequestBodyCommitter;
    message: string;
    parents?: string[];
    signature?: string;
    tree: string;
}
export declare class GitCreateCommitRequest extends SpeakeasyBase {
    pathParams: GitCreateCommitPathParams;
    request?: GitCreateCommitRequestBody;
}
export declare class GitCreateCommitResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    gitCommit?: shared.GitCommit;
    validationError?: shared.ValidationError;
}
