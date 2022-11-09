import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DataPointsGetStatisticsAllListGroupByEnum {
    Week = "week"
,    Month = "month"
}

export enum DataPointsGetStatisticsAllListStatusEnum {
    Deleted = "deleted"
,    Active = "active"
,    Paused = "paused"
,    Spam = "spam"
}

export enum DataPointsGetStatisticsAllListTimeFrameEnum {
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

export enum DataPointsGetStatisticsAllListTypeEnum {
    Tp = "tp"
,    Tl = "tl"
}


export class DataPointsGetStatisticsAllListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=favourite" })
  favourite?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupBy" })
  groupBy?: DataPointsGetStatisticsAllListGroupByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: DataPointsGetStatisticsAllListStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeFrame" })
  timeFrame: DataPointsGetStatisticsAllListTimeFrameEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: DataPointsGetStatisticsAllListTypeEnum;
}


export class DataPointsGetStatisticsAllListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DataPointsGetStatisticsAllListQueryParams;
}


export class DataPointsGetStatisticsAllListResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
