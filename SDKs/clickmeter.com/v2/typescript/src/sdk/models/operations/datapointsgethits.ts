import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DataPointsGetHitsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum DataPointsGetHitsFilterEnum {
    Spiders = "spiders",
    Uniques = "uniques",
    Nonuniques = "nonuniques",
    Conversions = "conversions"
}

export enum DataPointsGetHitsTimeframeEnum {
    Yesterday = "yesterday",
    Last7 = "last7",
    Last30 = "last30",
    Lastmonth = "lastmonth",
    Currentmonth = "currentmonth",
    Previousmonth = "previousmonth",
    Last90 = "last90",
    Last120 = "last120",
    Last180 = "last180",
    Custom = "custom"
}


export class DataPointsGetHitsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: DataPointsGetHitsFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe" })
  timeframe: DataPointsGetHitsTimeframeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;
}


export class DataPointsGetHitsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DataPointsGetHitsPathParams;

  @SpeakeasyMetadata()
  queryParams: DataPointsGetHitsQueryParams;
}


export class DataPointsGetHitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoClickStreamHitListPage?: shared.ApiCoreDtoClickStreamHitListPage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
