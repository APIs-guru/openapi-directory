import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupsGetDatapointsSummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GroupsGetDatapointsSummarySortDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GroupsGetDatapointsSummaryStatusEnum {
    Deleted = "deleted"
,    Active = "active"
}

export enum GroupsGetDatapointsSummaryTimeFrameEnum {
    Today = "today"
,    Yesterday = "yesterday"
,    Last7 = "last7"
,    Last30 = "last30"
,    Lastmonth = "lastmonth"
,    Currentmonth = "currentmonth"
,    Previousmonth = "previousmonth"
,    Last90 = "last90"
,    Last120 = "last120"
,    Last180 = "last180"
,    Last12months = "last12months"
,    Lastyear = "lastyear"
,    Currentyear = "currentyear"
,    Beginning = "beginning"
,    Custom = "custom"
}

export enum GroupsGetDatapointsSummaryTypeEnum {
    Tp = "tp"
,    Tl = "tl"
}


export class GroupsGetDatapointsSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=favourite" })
  favourite?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortDirection" })
  sortDirection?: GroupsGetDatapointsSummarySortDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GroupsGetDatapointsSummaryStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeFrame" })
  timeFrame: GroupsGetDatapointsSummaryTimeFrameEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GroupsGetDatapointsSummaryTypeEnum;
}


export class GroupsGetDatapointsSummaryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupsGetDatapointsSummaryPathParams;

  @Metadata()
  queryParams: GroupsGetDatapointsSummaryQueryParams;
}


export class GroupsGetDatapointsSummaryResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoAggregatedAggregatedSummaryResult?: shared.ApiCoreDtoAggregatedAggregatedSummaryResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
