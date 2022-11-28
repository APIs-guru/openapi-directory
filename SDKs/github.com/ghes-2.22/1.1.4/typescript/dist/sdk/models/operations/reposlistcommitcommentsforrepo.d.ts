import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListCommitCommentsForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposListCommitCommentsForRepoQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposListCommitCommentsForRepoRequest extends SpeakeasyBase {
    pathParams: ReposListCommitCommentsForRepoPathParams;
    queryParams: ReposListCommitCommentsForRepoQueryParams;
}
export declare class ReposListCommitCommentsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    commitComments?: shared.CommitComment[];
}
