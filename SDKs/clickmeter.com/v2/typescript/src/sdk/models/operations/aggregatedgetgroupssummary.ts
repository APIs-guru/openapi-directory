import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AggregatedGetGroupsSummarySortDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum AggregatedGetGroupsSummaryStatusEnum {
    Deleted = "deleted"
,    Active = "active"
}

export enum AggregatedGetGroupsSummaryTimeFrameEnum {
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


export class AggregatedGetGroupsSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=favourite" })
  favourite?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortDirection" })
  sortDirection?: AggregatedGetGroupsSummarySortDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: AggregatedGetGroupsSummaryStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeFrame" })
  timeFrame: AggregatedGetGroupsSummaryTimeFrameEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;
}


export class AggregatedGetGroupsSummaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AggregatedGetGroupsSummaryQueryParams;
}


export class AggregatedGetGroupsSummaryResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoAggregatedAggregatedSummaryResult?: shared.ApiCoreDtoAggregatedAggregatedSummaryResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
