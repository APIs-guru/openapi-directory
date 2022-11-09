import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum PullsListDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum PullsListSortEnum {
    Created = "created"
,    Updated = "updated"
,    Popularity = "popularity"
,    LongRunning = "long-running"
}

export enum PullsListStateEnum {
    Open = "open"
,    Closed = "closed"
,    All = "all"
}


export class PullsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=base" })
  base?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: PullsListDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=head" })
  head?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: PullsListSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: PullsListStateEnum;
}


export class PullsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsListPathParams;

  @Metadata()
  queryParams: PullsListQueryParams;
}


export class PullsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.PullRequestSimple })
  pullRequestSimples?: shared.PullRequestSimple[];

  @Metadata()
  validationError?: shared.ValidationError;
}
