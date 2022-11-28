import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConversionsGetTopsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversionId" })
  conversionId: number;
}

export enum ConversionsGetTopsHittypeEnum {
    Clicks = "clicks",
    Views = "views"
}

export enum ConversionsGetTopsTimeframeEnum {
    Yesterday = "yesterday",
    Last7 = "last7",
    Last30 = "last30",
    Lastmonth = "lastmonth",
    Currentmonth = "currentmonth",
    Previousmonth = "previousmonth",
    Last90 = "last90",
    Last120 = "last120",
    Last180 = "last180",
    Beginning = "beginning",
    Custom = "custom"
}

export enum ConversionsGetTopsTypeEnum {
    Datapoints = "datapoints",
    Groups = "groups",
    Browsers = "browsers",
    Browsersfamilies = "browsersfamilies",
    Platforms = "platforms",
    Cities = "cities",
    Countries = "countries",
    Keywords = "keywords",
    Referrers = "referrers",
    Convparameters = "convparameters",
    Destinations = "destinations",
    Languages = "languages",
    Params = "params"
}


export class ConversionsGetTopsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hittype" })
  hittype?: ConversionsGetTopsHittypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe" })
  timeframe: ConversionsGetTopsTimeframeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: ConversionsGetTopsTypeEnum;
}


export class ConversionsGetTopsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConversionsGetTopsPathParams;

  @SpeakeasyMetadata()
  queryParams: ConversionsGetTopsQueryParams;
}


export class ConversionsGetTopsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoTopsTop?: shared.ApiCoreDtoTopsTop;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
