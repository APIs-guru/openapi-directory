import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum IssuesListForAuthenticatedUserFilterEnum {
    Assigned = "assigned"
,    Created = "created"
,    Mentioned = "mentioned"
,    Subscribed = "subscribed"
,    Repos = "repos"
,    All = "all"
}

export enum IssuesListForAuthenticatedUserSortEnum {
    Created = "created"
,    Updated = "updated"
,    Comments = "comments"
}

export enum IssuesListForAuthenticatedUserStateEnum {
    Open = "open"
,    Closed = "closed"
,    All = "all"
}


export class IssuesListForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: IssuesListForAuthenticatedUserFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=labels" })
  labels?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: IssuesListForAuthenticatedUserSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: IssuesListForAuthenticatedUserStateEnum;
}


export class IssuesListForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: IssuesListForAuthenticatedUserQueryParams;
}


export class IssuesListForAuthenticatedUserResponse extends SpeakeasyBase {
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
}
