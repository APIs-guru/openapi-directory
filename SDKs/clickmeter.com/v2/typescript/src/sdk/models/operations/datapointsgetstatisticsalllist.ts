import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DataPointsGetStatisticsAllListGroupByEnum {
    Week = "week",
    Month = "month"
}

export enum DataPointsGetStatisticsAllListStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}

export enum DataPointsGetStatisticsAllListTimeFrameEnum {
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

export enum DataPointsGetStatisticsAllListTypeEnum {
    Tp = "tp",
    Tl = "tl"
}


export class DataPointsGetStatisticsAllListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=favourite" })
  favourite?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupBy" })
  groupBy?: DataPointsGetStatisticsAllListGroupByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: DataPointsGetStatisticsAllListStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" })
  timeFrame: DataPointsGetStatisticsAllListTimeFrameEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: DataPointsGetStatisticsAllListTypeEnum;
}


export class DataPointsGetStatisticsAllListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DataPointsGetStatisticsAllListQueryParams;
}


export class DataPointsGetStatisticsAllListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
