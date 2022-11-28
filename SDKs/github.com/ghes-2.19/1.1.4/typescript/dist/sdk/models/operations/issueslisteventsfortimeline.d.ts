import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesListEventsForTimelinePathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesListEventsForTimelineQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class IssuesListEventsForTimeline415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class IssuesListEventsForTimelineRequest extends SpeakeasyBase {
    pathParams: IssuesListEventsForTimelinePathParams;
    queryParams: IssuesListEventsForTimelineQueryParams;
}
export declare class IssuesListEventsForTimelineResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    issueEventForIssues?: shared.IssueEventForIssue[];
    issuesListEventsForTimeline415ApplicationJsonObject?: IssuesListEventsForTimeline415ApplicationJson;
}
