import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupsGetTopsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GroupsGetTopsHittypeEnum {
    Clicks = "clicks"
,    Views = "views"
}

export enum GroupsGetTopsTimeframeEnum {
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

export enum GroupsGetTopsTypeEnum {
    Browsers = "browsers"
,    Browsersfamilies = "browsersfamilies"
,    Platforms = "platforms"
,    Cities = "cities"
,    Countries = "countries"
,    Isps = "isps"
,    Ips = "ips"
,    Oss = "oss"
,    Ossfamilies = "ossfamilies"
,    Keywords = "keywords"
,    Referrers = "referrers"
,    Destinations = "destinations"
,    Languages = "languages"
,    Params = "params"
}


export class GroupsGetTopsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hittype" })
  hittype?: GroupsGetTopsHittypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeframe" })
  timeframe: GroupsGetTopsTimeframeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: GroupsGetTopsTypeEnum;
}


export class GroupsGetTopsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupsGetTopsPathParams;

  @Metadata()
  queryParams: GroupsGetTopsQueryParams;
}


export class GroupsGetTopsResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoTopsTop?: shared.ApiCoreDtoTopsTop;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
