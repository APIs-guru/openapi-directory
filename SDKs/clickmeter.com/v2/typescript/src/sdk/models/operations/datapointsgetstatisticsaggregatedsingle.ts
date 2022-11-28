import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DataPointsGetStatisticsAggregatedSingleStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}

export enum DataPointsGetStatisticsAggregatedSingleTimeFrameEnum {
    Today = "today",
    Yesterday = "yesterday",
    Last7 = "last7",
    Last30 = "last30",
    Lastmonth = "lastmonth",
    Currentmonth = "currentmonth",
    Previousmonth = "previousmonth",
    Last90 = "last90",
    Last120 = "last120",
    Last180 = "last180",
    Last12months = "last12months",
    Lastyear = "lastyear",
    Currentyear = "currentyear",
    Beginning = "beginning",
    Custom = "custom"
}

export enum DataPointsGetStatisticsAggregatedSingleTypeEnum {
    Tp = "tp",
    Tl = "tl"
}


export class DataPointsGetStatisticsAggregatedSingleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=favourite" })
  favourite?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hourly" })
  hourly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: DataPointsGetStatisticsAggregatedSingleStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" })
  timeFrame: DataPointsGetStatisticsAggregatedSingleTimeFrameEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DataPointsGetStatisticsAggregatedSingleTypeEnum;
}


export class DataPointsGetStatisticsAggregatedSingleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DataPointsGetStatisticsAggregatedSingleQueryParams;
}


export class DataPointsGetStatisticsAggregatedSingleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreDtoAggregatedAggregatedResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
