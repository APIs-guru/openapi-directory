import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLatestBaseCurrencyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=base_currency" })
  baseCurrency: string;
}


export class GetLatestBaseCurrencyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLatestBaseCurrencyPathParams;
}


export class GetLatestBaseCurrency200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=base" })
  base?: string;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=rates" })
  rates?: Map<string, number>;

  @Metadata({ data: "json, name=time_last_updated" })
  timeLastUpdated?: number;
}


export class GetLatestBaseCurrency404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error_type" })
  errorType?: string;

  @Metadata({ data: "json, name=result" })
  result?: string;
}


export class GetLatestBaseCurrencyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLatestBaseCurrency200ApplicationJsonObject?: GetLatestBaseCurrency200ApplicationJson;

  @Metadata()
  getLatestBaseCurrency404ApplicationJsonObject?: GetLatestBaseCurrency404ApplicationJson;

  @Metadata()
  statusCode: number;
}
