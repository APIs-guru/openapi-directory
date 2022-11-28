import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateGroupConversationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=participants;" })
  participants: string[];

  @SpeakeasyMetadata({ data: "form, name=topic;" })
  topic?: string;
}


export class CreateGroupConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateGroupConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: CreateGroupConversationRequestBody;

  @SpeakeasyMetadata()
  security: CreateGroupConversationSecurity;
}


export class CreateGroupConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversation?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
