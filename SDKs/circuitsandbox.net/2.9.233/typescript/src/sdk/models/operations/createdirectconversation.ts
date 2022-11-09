import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDirectConversationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=participant;" })
  participant: string;
}


export class CreateDirectConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateDirectConversationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: CreateDirectConversationRequestBody;

  @Metadata()
  security: CreateDirectConversationSecurity;
}


export class CreateDirectConversationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversation?: any;

  @Metadata()
  statusCode: number;
}
