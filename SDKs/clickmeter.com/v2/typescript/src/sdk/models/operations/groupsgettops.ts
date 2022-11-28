import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupsGetTopsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GroupsGetTopsHittypeEnum {
    Clicks = "clicks",
    Views = "views"
}

export enum GroupsGetTopsTimeframeEnum {
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

export enum GroupsGetTopsTypeEnum {
    Browsers = "browsers",
    Browsersfamilies = "browsersfamilies",
    Platforms = "platforms",
    Cities = "cities",
    Countries = "countries",
    Isps = "isps",
    Ips = "ips",
    Oss = "oss",
    Ossfamilies = "ossfamilies",
    Keywords = "keywords",
    Referrers = "referrers",
    Destinations = "destinations",
    Languages = "languages",
    Params = "params"
}


export class GroupsGetTopsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hittype" })
  hittype?: GroupsGetTopsHittypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe" })
  timeframe: GroupsGetTopsTimeframeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: GroupsGetTopsTypeEnum;
}


export class GroupsGetTopsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsGetTopsPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupsGetTopsQueryParams;
}


export class GroupsGetTopsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoTopsTop?: shared.ApiCoreDtoTopsTop;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
