import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesListForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum IssuesListForRepoSortEnum {
    Created = "created",
    Updated = "updated",
    Comments = "comments"
}

export enum IssuesListForRepoStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}


export class IssuesListForRepoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assignee" })
  assignee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=creator" })
  creator?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labels" })
  labels?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mentioned" })
  mentioned?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=milestone" })
  milestone?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: IssuesListForRepoSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: IssuesListForRepoStateEnum;
}


export class IssuesListForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesListForRepoPathParams;

  @SpeakeasyMetadata()
  queryParams: IssuesListForRepoQueryParams;
}


export class IssuesListForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.IssueSimple })
  issueSimples?: shared.IssueSimple[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
