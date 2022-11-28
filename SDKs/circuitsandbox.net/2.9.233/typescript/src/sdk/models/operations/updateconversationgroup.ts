import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateConversationGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class UpdateConversationGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=topic;" })
  topic?: string;
}


export class UpdateConversationGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateConversationGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateConversationGroupPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConversationGroupRequestBody;

  @SpeakeasyMetadata()
  security: UpdateConversationGroupSecurity;
}


export class UpdateConversationGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversation?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
