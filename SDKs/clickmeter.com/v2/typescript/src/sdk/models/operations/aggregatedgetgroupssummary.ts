import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AggregatedGetGroupsSummarySortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum AggregatedGetGroupsSummaryStatusEnum {
    Deleted = "deleted",
    Active = "active"
}

export enum AggregatedGetGroupsSummaryTimeFrameEnum {
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


export class AggregatedGetGroupsSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=favourite" })
  favourite?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortDirection" })
  sortDirection?: AggregatedGetGroupsSummarySortDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: AggregatedGetGroupsSummaryStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" })
  timeFrame: AggregatedGetGroupsSummaryTimeFrameEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;
}


export class AggregatedGetGroupsSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AggregatedGetGroupsSummaryQueryParams;
}


export class AggregatedGetGroupsSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoAggregatedAggregatedSummaryResult?: shared.ApiCoreDtoAggregatedAggregatedSummaryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
