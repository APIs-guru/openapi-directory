import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPullrequestsForCommitPathParams extends SpeakeasyBase {
    commit: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetPullrequestsForCommitQueryParams extends SpeakeasyBase {
    page?: number;
    pagelen?: number;
}
export declare class GetPullrequestsForCommitRequest extends SpeakeasyBase {
    pathParams: GetPullrequestsForCommitPathParams;
    queryParams: GetPullrequestsForCommitQueryParams;
}
export declare class GetPullrequestsForCommitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedPullrequests?: shared.PaginatedPullrequests;
}
