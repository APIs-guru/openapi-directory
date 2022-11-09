import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteServerFollowersNameWithHostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nameWithHost" })
  nameWithHost: string;
}


export class DeleteServerFollowersNameWithHostSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteServerFollowersNameWithHostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteServerFollowersNameWithHostPathParams;

  @Metadata()
  security: DeleteServerFollowersNameWithHostSecurity;
}


export class DeleteServerFollowersNameWithHostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
