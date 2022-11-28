import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum IssuesListForAuthenticatedUserFilterEnum {
    Assigned = "assigned",
    Created = "created",
    Mentioned = "mentioned",
    Subscribed = "subscribed",
    Repos = "repos",
    All = "all"
}

export enum IssuesListForAuthenticatedUserSortEnum {
    Created = "created",
    Updated = "updated",
    Comments = "comments"
}

export enum IssuesListForAuthenticatedUserStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}


export class IssuesListForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: IssuesListForAuthenticatedUserFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labels" })
  labels?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: IssuesListForAuthenticatedUserSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: IssuesListForAuthenticatedUserStateEnum;
}


export class IssuesListForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: IssuesListForAuthenticatedUserQueryParams;
}


export class IssuesListForAuthenticatedUserResponse extends SpeakeasyBase {
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
}
