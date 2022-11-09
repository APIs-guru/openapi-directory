import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DataPointsGetStatisticsAggregatedSingleStatusEnum {
    Deleted = "deleted"
,    Active = "active"
,    Paused = "paused"
,    Spam = "spam"
}

export enum DataPointsGetStatisticsAggregatedSingleTimeFrameEnum {
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

export enum DataPointsGetStatisticsAggregatedSingleTypeEnum {
    Tp = "tp"
,    Tl = "tl"
}


export class DataPointsGetStatisticsAggregatedSingleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=favourite" })
  favourite?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hourly" })
  hourly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: DataPointsGetStatisticsAggregatedSingleStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeFrame" })
  timeFrame: DataPointsGetStatisticsAggregatedSingleTimeFrameEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DataPointsGetStatisticsAggregatedSingleTypeEnum;
}


export class DataPointsGetStatisticsAggregatedSingleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DataPointsGetStatisticsAggregatedSingleQueryParams;
}


export class DataPointsGetStatisticsAggregatedSingleResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreDtoAggregatedAggregatedResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
