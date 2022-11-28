import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SystemCountriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class SystemCountriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: SystemCountriesSecurity;
}


export class SystemCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemCountries200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  systemCountriesDefaultApplicationJsonAny?: any;
}
