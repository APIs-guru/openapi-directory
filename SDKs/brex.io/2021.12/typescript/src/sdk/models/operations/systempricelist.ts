import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SystemPricelistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class SystemPricelistRequest extends SpeakeasyBase {
  @Metadata()
  security: SystemPricelistSecurity;
}


export class SystemPricelistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemPricelist200ApplicationJsonAnies?: any[];

  @Metadata()
  systemPricelistDefaultApplicationJsonAny?: any;
}
