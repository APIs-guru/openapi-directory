import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AggregatedGetConversionsSummarySortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum AggregatedGetConversionsSummaryStatusEnum {
    Deleted = "deleted",
    Active = "active"
}

export enum AggregatedGetConversionsSummaryTimeFrameEnum {
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


export class AggregatedGetConversionsSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortDirection" })
  sortDirection?: AggregatedGetConversionsSummarySortDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: AggregatedGetConversionsSummaryStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" })
  timeFrame: AggregatedGetConversionsSummaryTimeFrameEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;
}


export class AggregatedGetConversionsSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AggregatedGetConversionsSummaryQueryParams;
}


export class AggregatedGetConversionsSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoAggregatedAggregatedSummaryResult?: shared.ApiCoreDtoAggregatedAggregatedSummaryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
