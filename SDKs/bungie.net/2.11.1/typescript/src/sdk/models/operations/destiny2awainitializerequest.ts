import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Destiny2AwaInitializeRequestSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class Destiny2AwaInitializeRequestRequest extends SpeakeasyBase {
  @Metadata()
  security: Destiny2AwaInitializeRequestSecurity;
}


export class Destiny2AwaInitializeRequestResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
