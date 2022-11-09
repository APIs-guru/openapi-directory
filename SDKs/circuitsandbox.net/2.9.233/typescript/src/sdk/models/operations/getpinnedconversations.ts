import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPinnedConversationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class GetPinnedConversationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetPinnedConversationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPinnedConversationsPathParams;

  @Metadata()
  security: GetPinnedConversationsSecurity;
}


export class GetPinnedConversationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  pinnedTopics?: any[];

  @Metadata()
  statusCode: number;
}
