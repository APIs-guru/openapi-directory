import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DataPointsGetStatisticsSinglePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum DataPointsGetStatisticsSingleTimeFrameEnum {
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


export class DataPointsGetStatisticsSingleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hourly" })
  hourly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" })
  timeFrame: DataPointsGetStatisticsSingleTimeFrameEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;
}


export class DataPointsGetStatisticsSingleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DataPointsGetStatisticsSinglePathParams;

  @SpeakeasyMetadata()
  queryParams: DataPointsGetStatisticsSingleQueryParams;
}


export class DataPointsGetStatisticsSingleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreDtoAggregatedAggregatedResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
