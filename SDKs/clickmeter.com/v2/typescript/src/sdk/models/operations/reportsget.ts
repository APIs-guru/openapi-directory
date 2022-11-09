import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ReportsGetTimeframeEnum {
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

export enum ReportsGetTypeEnum {
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


export class ReportsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=conversion" })
  conversion?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=datapoint" })
  datapoint?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hittype" })
  hittype?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeframe" })
  timeframe: ReportsGetTimeframeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: ReportsGetTypeEnum;
}


export class ReportsGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReportsGetQueryParams;
}


export class ReportsGetResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoTopsTop?: shared.ApiCoreDtoTopsTop;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
