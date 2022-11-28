import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GeneralApiCurrenciesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class GeneralApiCurrenciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GeneralApiCurrenciesHeaders;
}


export class GeneralApiCurrenciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.CurrencyDetailsApiModel })
  currencyDetailsApiModels?: shared.CurrencyDetailsApiModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
