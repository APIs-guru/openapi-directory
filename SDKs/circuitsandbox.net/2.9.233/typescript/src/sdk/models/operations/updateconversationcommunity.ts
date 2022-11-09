import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateConversationCommunityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class UpdateConversationCommunityRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=description;" })
  description?: string;

  @Metadata({ data: "form, name=topic;" })
  topic?: string;
}


export class UpdateConversationCommunitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateConversationCommunityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateConversationCommunityPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConversationCommunityRequestBody;

  @Metadata()
  security: UpdateConversationCommunitySecurity;
}


export class UpdateConversationCommunityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversation?: any;

  @Metadata()
  statusCode: number;
}
