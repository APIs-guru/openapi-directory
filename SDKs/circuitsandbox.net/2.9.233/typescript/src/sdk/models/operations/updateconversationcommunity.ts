import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateConversationCommunityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class UpdateConversationCommunityRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "form, name=topic;" })
  topic?: string;
}


export class UpdateConversationCommunitySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateConversationCommunityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateConversationCommunityPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConversationCommunityRequestBody;

  @SpeakeasyMetadata()
  security: UpdateConversationCommunitySecurity;
}


export class UpdateConversationCommunityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversation?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
