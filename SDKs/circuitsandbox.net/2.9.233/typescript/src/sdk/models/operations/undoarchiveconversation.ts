import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UndoArchiveConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class UndoArchiveConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UndoArchiveConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UndoArchiveConversationPathParams;

  @SpeakeasyMetadata()
  security: UndoArchiveConversationSecurity;
}


export class UndoArchiveConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
