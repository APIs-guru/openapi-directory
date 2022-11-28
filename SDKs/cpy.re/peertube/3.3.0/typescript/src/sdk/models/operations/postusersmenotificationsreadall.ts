import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersMeNotificationsReadAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostUsersMeNotificationsReadAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: PostUsersMeNotificationsReadAllSecurity;
}


export class PostUsersMeNotificationsReadAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
