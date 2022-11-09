import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesListMilestonesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum IssuesListMilestonesDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum IssuesListMilestonesSortEnum {
    DueOn = "due_on"
,    Completeness = "completeness"
}

export enum IssuesListMilestonesStateEnum {
    Open = "open"
,    Closed = "closed"
,    All = "all"
}


export class IssuesListMilestonesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: IssuesListMilestonesDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: IssuesListMilestonesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: IssuesListMilestonesStateEnum;
}


export class IssuesListMilestonesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesListMilestonesPathParams;

  @Metadata()
  queryParams: IssuesListMilestonesQueryParams;
}


export class IssuesListMilestonesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.Milestone })
  milestones?: shared.Milestone[];
}
