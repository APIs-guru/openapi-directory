import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum HitsGetHitsFilterEnum {
    Spiders = "spiders"
,    Uniques = "uniques"
,    Nonuniques = "nonuniques"
,    Conversions = "conversions"
}

export enum HitsGetHitsTimeframeEnum {
    Yesterday = "yesterday"
,    Last7 = "last7"
,    Last30 = "last30"
,    Lastmonth = "lastmonth"
,    Currentmonth = "currentmonth"
,    Previousmonth = "previousmonth"
,    Last90 = "last90"
,    Last120 = "last120"
,    Last180 = "last180"
,    Custom = "custom"
}


export class HitsGetHitsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: HitsGetHitsFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeframe" })
  timeframe: HitsGetHitsTimeframeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;
}


export class HitsGetHitsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: HitsGetHitsQueryParams;
}


export class HitsGetHitsResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoClickStreamHitListPage?: shared.ApiCoreDtoClickStreamHitListPage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
