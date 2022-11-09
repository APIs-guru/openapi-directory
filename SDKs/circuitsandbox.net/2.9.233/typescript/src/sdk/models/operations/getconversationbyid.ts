import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConversationbyIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class GetConversationbyIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetConversationbyIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConversationbyIdPathParams;

  @Metadata()
  security: GetConversationbyIdSecurity;
}


export class GetConversationbyIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversation?: any;

  @Metadata()
  statusCode: number;
}
