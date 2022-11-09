import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum IssuesListFilterEnum {
    Assigned = "assigned"
,    Created = "created"
,    Mentioned = "mentioned"
,    Subscribed = "subscribed"
,    Repos = "repos"
,    All = "all"
}

export enum IssuesListSortEnum {
    Created = "created"
,    Updated = "updated"
,    Comments = "comments"
}

export enum IssuesListStateEnum {
    Open = "open"
,    Closed = "closed"
,    All = "all"
}


export class IssuesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=collab" })
  collab?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: IssuesListFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=labels" })
  labels?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orgs" })
  orgs?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=owned" })
  owned?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pulls" })
  pulls?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: IssuesListSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: IssuesListStateEnum;
}


export class IssuesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: IssuesListQueryParams;
}


export class IssuesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.Issue })
  issues?: shared.Issue[];

  @Metadata()
  validationError?: shared.ValidationError;
}
