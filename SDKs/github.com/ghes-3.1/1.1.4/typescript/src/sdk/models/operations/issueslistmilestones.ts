import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesListMilestonesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum IssuesListMilestonesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum IssuesListMilestonesSortEnum {
    DueOn = "due_on",
    Completeness = "completeness"
}

export enum IssuesListMilestonesStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}


export class IssuesListMilestonesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: IssuesListMilestonesDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: IssuesListMilestonesSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: IssuesListMilestonesStateEnum;
}


export class IssuesListMilestonesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesListMilestonesPathParams;

  @SpeakeasyMetadata()
  queryParams: IssuesListMilestonesQueryParams;
}


export class IssuesListMilestonesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.Milestone })
  milestones?: shared.Milestone[];
}
