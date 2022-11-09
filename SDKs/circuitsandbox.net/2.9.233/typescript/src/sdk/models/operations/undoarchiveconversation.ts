import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UndoArchiveConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class UndoArchiveConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UndoArchiveConversationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UndoArchiveConversationPathParams;

  @Metadata()
  security: UndoArchiveConversationSecurity;
}


export class UndoArchiveConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
