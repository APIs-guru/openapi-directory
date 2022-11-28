import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListPullRequestsAssociatedWithCommitPathParams extends SpeakeasyBase {
    commitSha: string;
    owner: string;
    repo: string;
}
export declare class ReposListPullRequestsAssociatedWithCommitQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposListPullRequestsAssociatedWithCommit415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReposListPullRequestsAssociatedWithCommitRequest extends SpeakeasyBase {
    pathParams: ReposListPullRequestsAssociatedWithCommitPathParams;
    queryParams: ReposListPullRequestsAssociatedWithCommitQueryParams;
}
export declare class ReposListPullRequestsAssociatedWithCommitResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    pullRequestSimples?: shared.PullRequestSimple[];
    reposListPullRequestsAssociatedWithCommit415ApplicationJsonObject?: ReposListPullRequestsAssociatedWithCommit415ApplicationJson;
}
