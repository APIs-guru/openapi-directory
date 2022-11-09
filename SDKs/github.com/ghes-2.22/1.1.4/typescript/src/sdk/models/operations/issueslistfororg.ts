import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesListForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum IssuesListForOrgFilterEnum {
    Assigned = "assigned"
,    Created = "created"
,    Mentioned = "mentioned"
,    Subscribed = "subscribed"
,    Repos = "repos"
,    All = "all"
}

export enum IssuesListForOrgSortEnum {
    Created = "created"
,    Updated = "updated"
,    Comments = "comments"
}

export enum IssuesListForOrgStateEnum {
    Open = "open"
,    Closed = "closed"
,    All = "all"
}


export class IssuesListForOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: IssuesListForOrgFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=labels" })
  labels?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: IssuesListForOrgSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: IssuesListForOrgStateEnum;
}


export class IssuesListForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesListForOrgPathParams;

  @Metadata()
  queryParams: IssuesListForOrgQueryParams;
}


export class IssuesListForOrgResponse extends SpeakeasyBase {
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
