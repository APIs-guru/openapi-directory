import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SystemCountriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class SystemCountriesRequest extends SpeakeasyBase {
  @Metadata()
  security: SystemCountriesSecurity;
}


export class SystemCountriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemCountries200ApplicationJsonAnies?: any[];

  @Metadata()
  systemCountriesDefaultApplicationJsonAny?: any;
}
