import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesListEventsPathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesListEventsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class IssuesListEventsRequest extends SpeakeasyBase {
    pathParams: IssuesListEventsPathParams;
    queryParams: IssuesListEventsQueryParams;
}
export declare class IssuesListEventsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    issueEventForIssues?: shared.IssueEventForIssue[];
}
