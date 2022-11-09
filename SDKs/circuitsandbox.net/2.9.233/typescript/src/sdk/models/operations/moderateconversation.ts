import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ModerateConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class ModerateConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ModerateConversationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ModerateConversationPathParams;

  @Metadata()
  security: ModerateConversationSecurity;
}


export class ModerateConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
