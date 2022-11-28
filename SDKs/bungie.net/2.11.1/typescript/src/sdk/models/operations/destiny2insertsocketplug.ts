import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class Destiny2InsertSocketPlugSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class Destiny2InsertSocketPlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: Destiny2InsertSocketPlugSecurity;
}


export class Destiny2InsertSocketPlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
