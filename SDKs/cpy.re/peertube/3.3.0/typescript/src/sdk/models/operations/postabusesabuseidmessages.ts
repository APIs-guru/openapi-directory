import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAbusesAbuseIdMessagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=abuseId" })
  abuseId: number;
}


export class PostAbusesAbuseIdMessagesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostAbusesAbuseIdMessagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostAbusesAbuseIdMessagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAbusesAbuseIdMessagesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PostAbusesAbuseIdMessagesRequestBody;

  @Metadata()
  security: PostAbusesAbuseIdMessagesSecurity;
}


export class PostAbusesAbuseIdMessagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
