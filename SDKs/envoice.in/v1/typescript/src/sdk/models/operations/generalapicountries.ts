import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GeneralApiCountriesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class GeneralApiCountriesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GeneralApiCountriesHeaders;
}


export class GeneralApiCountriesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.CountryDetailsApiModel })
  countryDetailsApiModels?: shared.CountryDetailsApiModel[];

  @Metadata()
  statusCode: number;
}
