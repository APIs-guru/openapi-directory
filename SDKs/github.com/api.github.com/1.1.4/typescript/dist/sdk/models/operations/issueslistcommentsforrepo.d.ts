import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesListCommentsForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum IssuesListCommentsForRepoDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class IssuesListCommentsForRepoQueryParams extends SpeakeasyBase {
    direction?: IssuesListCommentsForRepoDirectionEnum;
    page?: number;
    perPage?: number;
    since?: string;
    sort?: shared.SortEnum;
}
export declare class IssuesListCommentsForRepoRequest extends SpeakeasyBase {
    pathParams: IssuesListCommentsForRepoPathParams;
    queryParams: IssuesListCommentsForRepoQueryParams;
}
export declare class IssuesListCommentsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    issueComments?: shared.IssueComment[];
    validationError?: shared.ValidationError;
}
