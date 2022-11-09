import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersMeNotificationsReadRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: number[];
}


export class PostUsersMeNotificationsReadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostUsersMeNotificationsReadRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostUsersMeNotificationsReadRequestBody;

  @Metadata()
  security: PostUsersMeNotificationsReadSecurity;
}


export class PostUsersMeNotificationsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
