import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GroupsGetStatisticsAllListGroupByEnum {
    Deleted = "deleted"
,    Active = "active"
}

export enum GroupsGetStatisticsAllListTimeFrameEnum {
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


export class GroupsGetStatisticsAllListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=favourite" })
  favourite?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupBy" })
  groupBy?: GroupsGetStatisticsAllListGroupByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeFrame" })
  timeFrame: GroupsGetStatisticsAllListTimeFrameEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;
}


export class GroupsGetStatisticsAllListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GroupsGetStatisticsAllListQueryParams;
}


export class GroupsGetStatisticsAllListResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
