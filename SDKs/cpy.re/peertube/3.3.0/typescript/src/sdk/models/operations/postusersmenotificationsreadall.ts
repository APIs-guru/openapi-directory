import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersMeNotificationsReadAllSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostUsersMeNotificationsReadAllRequest extends SpeakeasyBase {
  @Metadata()
  security: PostUsersMeNotificationsReadAllSecurity;
}


export class PostUsersMeNotificationsReadAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
