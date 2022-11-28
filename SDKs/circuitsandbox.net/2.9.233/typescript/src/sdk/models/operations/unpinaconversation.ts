import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnPinAConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class UnPinAConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UnPinAConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnPinAConversationPathParams;

  @SpeakeasyMetadata()
  security: UnPinAConversationSecurity;
}


export class UnPinAConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversation?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
