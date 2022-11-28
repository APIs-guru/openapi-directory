import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SystemPricelistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class SystemPricelistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: SystemPricelistSecurity;
}


export class SystemPricelistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemPricelist200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  systemPricelistDefaultApplicationJsonAny?: any;
}
