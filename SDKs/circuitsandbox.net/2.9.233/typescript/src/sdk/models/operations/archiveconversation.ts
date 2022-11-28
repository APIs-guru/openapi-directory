import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArchiveConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class ArchiveConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ArchiveConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArchiveConversationPathParams;

  @SpeakeasyMetadata()
  security: ArchiveConversationSecurity;
}


export class ArchiveConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
