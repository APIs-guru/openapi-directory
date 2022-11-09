import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesListEventsForTimelinePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesListEventsForTimelineQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class IssuesListEventsForTimelineRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesListEventsForTimelinePathParams;

  @Metadata()
  queryParams: IssuesListEventsForTimelineQueryParams;
}


export class IssuesListEventsForTimeline415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class IssuesListEventsForTimelineResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.IssueEventForIssue })
  issueEventForIssues?: shared.IssueEventForIssue[];

  @Metadata()
  issuesListEventsForTimeline415ApplicationJsonObject?: IssuesListEventsForTimeline415ApplicationJson;
}
