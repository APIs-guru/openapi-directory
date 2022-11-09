import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGroupConversationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=participants;" })
  participants: string[];

  @Metadata({ data: "form, name=topic;" })
  topic?: string;
}


export class CreateGroupConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateGroupConversationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: CreateGroupConversationRequestBody;

  @Metadata()
  security: CreateGroupConversationSecurity;
}


export class CreateGroupConversationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversation?: any;

  @Metadata()
  statusCode: number;
}
