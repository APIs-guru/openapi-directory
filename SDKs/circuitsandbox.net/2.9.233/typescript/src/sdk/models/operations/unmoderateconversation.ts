import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnmoderateConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class UnmoderateConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UnmoderateConversationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnmoderateConversationPathParams;

  @Metadata()
  security: UnmoderateConversationSecurity;
}


export class UnmoderateConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
