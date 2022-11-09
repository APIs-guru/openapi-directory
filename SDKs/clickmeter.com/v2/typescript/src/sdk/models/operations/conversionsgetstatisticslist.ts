import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConversionsGetStatisticsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversionId" })
  conversionId: number;
}

export enum ConversionsGetStatisticsListGroupByEnum {
    Week = "week"
,    Month = "month"
}

export enum ConversionsGetStatisticsListTimeFrameEnum {
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


export class ConversionsGetStatisticsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupBy" })
  groupBy?: ConversionsGetStatisticsListGroupByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeFrame" })
  timeFrame: ConversionsGetStatisticsListTimeFrameEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;
}


export class ConversionsGetStatisticsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConversionsGetStatisticsListPathParams;

  @Metadata()
  queryParams: ConversionsGetStatisticsListQueryParams;
}


export class ConversionsGetStatisticsListResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
