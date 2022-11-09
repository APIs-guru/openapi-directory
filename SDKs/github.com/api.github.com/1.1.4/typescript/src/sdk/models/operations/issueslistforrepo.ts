import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesListForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum IssuesListForRepoSortEnum {
    Created = "created"
,    Updated = "updated"
,    Comments = "comments"
}

export enum IssuesListForRepoStateEnum {
    Open = "open"
,    Closed = "closed"
,    All = "all"
}


export class IssuesListForRepoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=assignee" })
  assignee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=creator" })
  creator?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=labels" })
  labels?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mentioned" })
  mentioned?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=milestone" })
  milestone?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: IssuesListForRepoSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: IssuesListForRepoStateEnum;
}


export class IssuesListForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesListForRepoPathParams;

  @Metadata()
  queryParams: IssuesListForRepoQueryParams;
}


export class IssuesListForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.IssueSimple })
  issueSimples?: shared.IssueSimple[];

  @Metadata()
  validationError?: shared.ValidationError;
}
