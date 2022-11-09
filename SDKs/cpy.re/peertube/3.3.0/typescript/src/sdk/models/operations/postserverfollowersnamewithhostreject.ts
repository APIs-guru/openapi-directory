import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostServerFollowersNameWithHostRejectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nameWithHost" })
  nameWithHost: string;
}


export class PostServerFollowersNameWithHostRejectSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostServerFollowersNameWithHostRejectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServerFollowersNameWithHostRejectPathParams;

  @Metadata()
  security: PostServerFollowersNameWithHostRejectSecurity;
}


export class PostServerFollowersNameWithHostRejectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
