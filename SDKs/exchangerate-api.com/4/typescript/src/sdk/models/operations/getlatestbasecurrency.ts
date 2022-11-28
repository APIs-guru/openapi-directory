import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLatestBaseCurrencyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=base_currency" })
  baseCurrency: string;
}


export class GetLatestBaseCurrency200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base" })
  base?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=rates" })
  rates?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=time_last_updated" })
  timeLastUpdated?: number;
}


export class GetLatestBaseCurrency404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_type" })
  errorType?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;
}


export class GetLatestBaseCurrencyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLatestBaseCurrencyPathParams;
}


export class GetLatestBaseCurrencyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLatestBaseCurrency200ApplicationJsonObject?: GetLatestBaseCurrency200ApplicationJson;

  @SpeakeasyMetadata()
  getLatestBaseCurrency404ApplicationJsonObject?: GetLatestBaseCurrency404ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
