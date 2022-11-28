import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPinnedConversationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class GetPinnedConversationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetPinnedConversationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPinnedConversationsPathParams;

  @SpeakeasyMetadata()
  security: GetPinnedConversationsSecurity;
}


export class GetPinnedConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pinnedTopics?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
