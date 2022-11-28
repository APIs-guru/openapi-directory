import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum IssuesListFilterEnum {
    Assigned = "assigned",
    Created = "created",
    Mentioned = "mentioned",
    Subscribed = "subscribed",
    Repos = "repos",
    All = "all"
}

export enum IssuesListSortEnum {
    Created = "created",
    Updated = "updated",
    Comments = "comments"
}

export enum IssuesListStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}


export class IssuesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collab" })
  collab?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: IssuesListFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labels" })
  labels?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgs" })
  orgs?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=owned" })
  owned?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pulls" })
  pulls?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: IssuesListSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: IssuesListStateEnum;
}


export class IssuesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: IssuesListQueryParams;
}


export class IssuesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.Issue })
  issues?: shared.Issue[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
