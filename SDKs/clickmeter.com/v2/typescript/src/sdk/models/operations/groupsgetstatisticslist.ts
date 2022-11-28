import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupsGetStatisticsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GroupsGetStatisticsListGroupByEnum {
    Week = "week",
    Month = "month"
}

export enum GroupsGetStatisticsListTimeFrameEnum {
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


export class GroupsGetStatisticsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupBy" })
  groupBy?: GroupsGetStatisticsListGroupByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" })
  timeFrame: GroupsGetStatisticsListTimeFrameEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;
}


export class GroupsGetStatisticsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsGetStatisticsListPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupsGetStatisticsListQueryParams;
}


export class GroupsGetStatisticsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
