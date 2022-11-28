import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesListEventsForTimelinePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesListEventsForTimelineQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class IssuesListEventsForTimeline415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class IssuesListEventsForTimelineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesListEventsForTimelinePathParams;

  @SpeakeasyMetadata()
  queryParams: IssuesListEventsForTimelineQueryParams;
}


export class IssuesListEventsForTimelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.IssueEventForIssue })
  issueEventForIssues?: shared.IssueEventForIssue[];

  @SpeakeasyMetadata()
  issuesListEventsForTimeline415ApplicationJsonObject?: IssuesListEventsForTimeline415ApplicationJson;
}
