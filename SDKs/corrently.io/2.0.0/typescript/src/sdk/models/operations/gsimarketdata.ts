import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GsiMarketdataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GsiMarketdataRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GsiMarketdataQueryParams;
}


export class GsiMarketdata200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.MarketData })
  data?: shared.MarketData[];
}


export class GsiMarketdataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  gsiMarketdata200ApplicationJsonObject?: GsiMarketdata200ApplicationJson;
}
