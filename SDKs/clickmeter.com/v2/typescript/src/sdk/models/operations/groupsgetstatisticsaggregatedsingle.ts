import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GroupsGetStatisticsAggregatedSingleStatusEnum {
    Deleted = "deleted",
    Active = "active"
}

export enum GroupsGetStatisticsAggregatedSingleTimeFrameEnum {
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


export class GroupsGetStatisticsAggregatedSingleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=favourite" })
  favourite?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hourly" })
  hourly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GroupsGetStatisticsAggregatedSingleStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" })
  timeFrame: GroupsGetStatisticsAggregatedSingleTimeFrameEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;
}


export class GroupsGetStatisticsAggregatedSingleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GroupsGetStatisticsAggregatedSingleQueryParams;
}


export class GroupsGetStatisticsAggregatedSingleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreDtoAggregatedAggregatedResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
