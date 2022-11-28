import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSingleConversationtemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetSingleConversationtemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetSingleConversationtemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSingleConversationtemPathParams;

  @SpeakeasyMetadata()
  security: GetSingleConversationtemSecurity;
}


export class GetSingleConversationtemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversationItem?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
