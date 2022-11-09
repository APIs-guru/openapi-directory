import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GeneralApiCurrenciesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class GeneralApiCurrenciesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GeneralApiCurrenciesHeaders;
}


export class GeneralApiCurrenciesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.CurrencyDetailsApiModel })
  currencyDetailsApiModels?: shared.CurrencyDetailsApiModel[];

  @Metadata()
  statusCode: number;
}
