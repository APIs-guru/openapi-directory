import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateConversationGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class UpdateConversationGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=topic;" })
  topic?: string;
}


export class UpdateConversationGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateConversationGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateConversationGroupPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConversationGroupRequestBody;

  @Metadata()
  security: UpdateConversationGroupSecurity;
}


export class UpdateConversationGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversation?: any;

  @Metadata()
  statusCode: number;
}
