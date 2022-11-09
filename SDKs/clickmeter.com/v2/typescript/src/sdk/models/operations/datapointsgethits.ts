import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DataPointsGetHitsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum DataPointsGetHitsFilterEnum {
    Spiders = "spiders"
,    Uniques = "uniques"
,    Nonuniques = "nonuniques"
,    Conversions = "conversions"
}

export enum DataPointsGetHitsTimeframeEnum {
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


export class DataPointsGetHitsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: DataPointsGetHitsFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeframe" })
  timeframe: DataPointsGetHitsTimeframeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;
}


export class DataPointsGetHitsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DataPointsGetHitsPathParams;

  @Metadata()
  queryParams: DataPointsGetHitsQueryParams;
}


export class DataPointsGetHitsResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoClickStreamHitListPage?: shared.ApiCoreDtoClickStreamHitListPage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
