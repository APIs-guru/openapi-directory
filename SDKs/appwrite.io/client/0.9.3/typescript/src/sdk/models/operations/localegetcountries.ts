import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LocaleGetCountriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class LocaleGetCountriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: LocaleGetCountriesSecurity;
}


export class LocaleGetCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  countryList?: shared.CountryList;
}
