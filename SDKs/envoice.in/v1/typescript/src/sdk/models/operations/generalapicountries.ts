import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GeneralApiCountriesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class GeneralApiCountriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GeneralApiCountriesHeaders;
}


export class GeneralApiCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.CountryDetailsApiModel })
  countryDetailsApiModels?: shared.CountryDetailsApiModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
