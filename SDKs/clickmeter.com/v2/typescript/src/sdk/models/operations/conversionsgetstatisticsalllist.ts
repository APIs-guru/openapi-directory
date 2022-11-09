import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ConversionsGetStatisticsAllListGroupByEnum {
    Week = "week"
,    Month = "month"
}

export enum ConversionsGetStatisticsAllListStatusEnum {
    Deleted = "deleted"
,    Active = "active"
}

export enum ConversionsGetStatisticsAllListTimeFrameEnum {
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


export class ConversionsGetStatisticsAllListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupBy" })
  groupBy?: ConversionsGetStatisticsAllListGroupByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ConversionsGetStatisticsAllListStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeFrame" })
  timeFrame: ConversionsGetStatisticsAllListTimeFrameEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;
}


export class ConversionsGetStatisticsAllListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ConversionsGetStatisticsAllListQueryParams;
}


export class ConversionsGetStatisticsAllListResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
