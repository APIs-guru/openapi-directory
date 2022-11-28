import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum PullsListDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum PullsListSortEnum {
    Created = "created",
    Updated = "updated",
    Popularity = "popularity",
    LongRunning = "long-running"
}

export enum PullsListStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}


export class PullsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base" })
  base?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: PullsListDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=head" })
  head?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: PullsListSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: PullsListStateEnum;
}


export class PullsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsListPathParams;

  @SpeakeasyMetadata()
  queryParams: PullsListQueryParams;
}


export class PullsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.PullRequestSimple })
  pullRequestSimples?: shared.PullRequestSimple[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
