import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ReportsGetTimeframeEnum {
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

export enum ReportsGetTypeEnum {
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


export class ReportsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conversion" })
  conversion?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=datapoint" })
  datapoint?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hittype" })
  hittype?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe" })
  timeframe: ReportsGetTimeframeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: ReportsGetTypeEnum;
}


export class ReportsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReportsGetQueryParams;
}


export class ReportsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoTopsTop?: shared.ApiCoreDtoTopsTop;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
