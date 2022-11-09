import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCommunityConversationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=description;" })
  description?: string;

  @Metadata({ data: "form, name=participants;" })
  participants?: string[];

  @Metadata({ data: "form, name=topic;" })
  topic: string;
}


export class CreateCommunityConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateCommunityConversationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCommunityConversationRequestBody;

  @Metadata()
  security: CreateCommunityConversationSecurity;
}


export class CreateCommunityConversationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversation?: any;

  @Metadata()
  statusCode: number;
}
