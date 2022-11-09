import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSingleConversationtemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetSingleConversationtemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetSingleConversationtemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSingleConversationtemPathParams;

  @Metadata()
  security: GetSingleConversationtemSecurity;
}


export class GetSingleConversationtemResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversationItem?: any;

  @Metadata()
  statusCode: number;
}
