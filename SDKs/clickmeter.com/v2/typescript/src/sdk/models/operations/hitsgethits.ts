import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum HitsGetHitsFilterEnum {
    Spiders = "spiders",
    Uniques = "uniques",
    Nonuniques = "nonuniques",
    Conversions = "conversions"
}

export enum HitsGetHitsTimeframeEnum {
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


export class HitsGetHitsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: HitsGetHitsFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe" })
  timeframe: HitsGetHitsTimeframeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;
}


export class HitsGetHitsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: HitsGetHitsQueryParams;
}


export class HitsGetHitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoClickStreamHitListPage?: shared.ApiCoreDtoClickStreamHitListPage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
