import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class V2GetTelephonyConversationIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class V2GetTelephonyConversationIdRequest extends SpeakeasyBase {
  @Metadata()
  security: V2GetTelephonyConversationIdSecurity;
}


export class V2GetTelephonyConversationIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
