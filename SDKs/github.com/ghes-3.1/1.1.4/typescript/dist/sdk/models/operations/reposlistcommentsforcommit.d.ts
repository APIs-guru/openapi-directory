import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListCommentsForCommitPathParams extends SpeakeasyBase {
    commitSha: string;
    owner: string;
    repo: string;
}
export declare class ReposListCommentsForCommitQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposListCommentsForCommitRequest extends SpeakeasyBase {
    pathParams: ReposListCommentsForCommitPathParams;
    queryParams: ReposListCommentsForCommitQueryParams;
}
export declare class ReposListCommentsForCommitResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    commitComments?: shared.CommitComment[];
}
