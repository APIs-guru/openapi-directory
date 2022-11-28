import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAbusesAbuseIdMessagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=abuseId" })
  abuseId: number;
}


export class PostAbusesAbuseIdMessagesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostAbusesAbuseIdMessagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostAbusesAbuseIdMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAbusesAbuseIdMessagesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAbusesAbuseIdMessagesRequestBody;

  @SpeakeasyMetadata()
  security: PostAbusesAbuseIdMessagesSecurity;
}


export class PostAbusesAbuseIdMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
