import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteUsersMeAvatarSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteUsersMeAvatarRequest extends SpeakeasyBase {
  @Metadata()
  security: DeleteUsersMeAvatarSecurity;
}


export class DeleteUsersMeAvatarResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
