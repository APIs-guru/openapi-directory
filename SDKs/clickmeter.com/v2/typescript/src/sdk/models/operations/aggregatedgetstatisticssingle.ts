import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AggregatedGetStatisticsSingleTimeFrameEnum {
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


export class AggregatedGetStatisticsSingleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hourly" })
  hourly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=onlyFavorites" })
  onlyFavorites?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeFrame" })
  timeFrame: AggregatedGetStatisticsSingleTimeFrameEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;
}


export class AggregatedGetStatisticsSingleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AggregatedGetStatisticsSingleQueryParams;
}


export class AggregatedGetStatisticsSingleResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreDtoAggregatedAggregatedResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
