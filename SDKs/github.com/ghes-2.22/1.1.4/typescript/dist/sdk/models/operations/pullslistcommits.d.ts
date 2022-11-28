import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsListCommitsPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsListCommitsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class PullsListCommitsRequest extends SpeakeasyBase {
    pathParams: PullsListCommitsPathParams;
    queryParams: PullsListCommitsQueryParams;
}
export declare class PullsListCommitsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    commits?: shared.Commit[];
}
