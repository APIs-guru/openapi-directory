import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DataPointsGetTopsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum DataPointsGetTopsTimeframeEnum {
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

export enum DataPointsGetTopsTypeEnum {
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


export class DataPointsGetTopsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" })
  fromDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe" })
  timeframe: DataPointsGetTopsTimeframeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" })
  toDay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: DataPointsGetTopsTypeEnum;
}


export class DataPointsGetTopsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DataPointsGetTopsPathParams;

  @SpeakeasyMetadata()
  queryParams: DataPointsGetTopsQueryParams;
}


export class DataPointsGetTopsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoTopsTop?: shared.ApiCoreDtoTopsTop;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
