import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesListForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum IssuesListForOrgFilterEnum {
    Assigned = "assigned",
    Created = "created",
    Mentioned = "mentioned",
    Subscribed = "subscribed",
    Repos = "repos",
    All = "all"
}

export enum IssuesListForOrgSortEnum {
    Created = "created",
    Updated = "updated",
    Comments = "comments"
}

export enum IssuesListForOrgStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}


export class IssuesListForOrgQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: IssuesListForOrgFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labels" })
  labels?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: IssuesListForOrgSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: IssuesListForOrgStateEnum;
}


export class IssuesListForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesListForOrgPathParams;

  @SpeakeasyMetadata()
  queryParams: IssuesListForOrgQueryParams;
}


export class IssuesListForOrgResponse extends SpeakeasyBase {
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
