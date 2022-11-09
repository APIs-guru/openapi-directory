import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConversionsGetTopsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversionId" })
  conversionId: number;
}

export enum ConversionsGetTopsHittypeEnum {
    Clicks = "clicks"
,    Views = "views"
}

export enum ConversionsGetTopsTimeframeEnum {
    Yesterday = "yesterday"
,    Last7 = "last7"
,    Last30 = "last30"
,    Lastmonth = "lastmonth"
,    Currentmonth = "currentmonth"
,    Previousmonth = "previousmonth"
,    Last90 = "last90"
,    Last120 = "last120"
,    Last180 = "last180"
,    Beginning = "beginning"
,    Custom = "custom"
}

export enum ConversionsGetTopsTypeEnum {
    Datapoints = "datapoints"
,    Groups = "groups"
,    Browsers = "browsers"
,    Browsersfamilies = "browsersfamilies"
,    Platforms = "platforms"
,    Cities = "cities"
,    Countries = "countries"
,    Keywords = "keywords"
,    Referrers = "referrers"
,    Convparameters = "convparameters"
,    Destinations = "destinations"
,    Languages = "languages"
,    Params = "params"
}


export class ConversionsGetTopsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hittype" })
  hittype?: ConversionsGetTopsHittypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeframe" })
  timeframe: ConversionsGetTopsTimeframeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: ConversionsGetTopsTypeEnum;
}


export class ConversionsGetTopsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConversionsGetTopsPathParams;

  @Metadata()
  queryParams: ConversionsGetTopsQueryParams;
}


export class ConversionsGetTopsResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoTopsTop?: shared.ApiCoreDtoTopsTop;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
