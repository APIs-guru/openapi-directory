import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesListCommentsPathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesListCommentsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    since?: Date;
}
export declare class IssuesListCommentsRequest extends SpeakeasyBase {
    pathParams: IssuesListCommentsPathParams;
    queryParams: IssuesListCommentsQueryParams;
}
export declare class IssuesListCommentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    issueComments?: shared.IssueComment[];
}
