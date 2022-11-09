import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConversionsGetHitsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversionId" })
  conversionId: number;
}

export enum ConversionsGetHitsFilterEnum {
    Spiders = "spiders"
,    Uniques = "uniques"
,    Nonuniques = "nonuniques"
,    Conversions = "conversions"
}

export enum ConversionsGetHitsTimeframeEnum {
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


export class ConversionsGetHitsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: ConversionsGetHitsFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeframe" })
  timeframe: ConversionsGetHitsTimeframeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;
}


export class ConversionsGetHitsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConversionsGetHitsPathParams;

  @Metadata()
  queryParams: ConversionsGetHitsQueryParams;
}


export class ConversionsGetHitsResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoClickStreamHitListPage?: shared.ApiCoreDtoClickStreamHitListPage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
