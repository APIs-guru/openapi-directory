import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class Destiny2AwaInitializeRequestSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class Destiny2AwaInitializeRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: Destiny2AwaInitializeRequestSecurity;
}


export class Destiny2AwaInitializeRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
