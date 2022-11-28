import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GsiMarketdataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GsiMarketdata200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.MarketData })
  data?: shared.MarketData[];
}


export class GsiMarketdataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GsiMarketdataQueryParams;
}


export class GsiMarketdataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  gsiMarketdata200ApplicationJsonObject?: GsiMarketdata200ApplicationJson;
}
