import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class V2GetTelephonyConversationIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class V2GetTelephonyConversationIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: V2GetTelephonyConversationIdSecurity;
}


export class V2GetTelephonyConversationIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
