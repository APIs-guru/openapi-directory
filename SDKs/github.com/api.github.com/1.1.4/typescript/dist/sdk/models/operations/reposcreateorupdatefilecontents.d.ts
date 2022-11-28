import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreateOrUpdateFileContentsPathParams extends SpeakeasyBase {
    owner: string;
    path: string;
    repo: string;
}
/**
 * The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.
**/
export declare class ReposCreateOrUpdateFileContentsRequestBodyAuthor extends SpeakeasyBase {
    date?: string;
    email: string;
    name: string;
}
/**
 * The person that committed the file. Default: the authenticated user.
**/
export declare class ReposCreateOrUpdateFileContentsRequestBodyCommitter extends SpeakeasyBase {
    date?: string;
    email: string;
    name: string;
}
export declare class ReposCreateOrUpdateFileContentsRequestBody extends SpeakeasyBase {
    author?: ReposCreateOrUpdateFileContentsRequestBodyAuthor;
    branch?: string;
    committer?: ReposCreateOrUpdateFileContentsRequestBodyCommitter;
    content: string;
    message: string;
    sha?: string;
}
export declare class ReposCreateOrUpdateFileContentsRequest extends SpeakeasyBase {
    pathParams: ReposCreateOrUpdateFileContentsPathParams;
    request?: ReposCreateOrUpdateFileContentsRequestBody;
}
export declare class ReposCreateOrUpdateFileContentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    fileCommit?: shared.FileCommit;
    validationError?: shared.ValidationError;
}
