import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostServerFollowersNameWithHostRejectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nameWithHost" })
  nameWithHost: string;
}


export class PostServerFollowersNameWithHostRejectSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostServerFollowersNameWithHostRejectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostServerFollowersNameWithHostRejectPathParams;

  @SpeakeasyMetadata()
  security: PostServerFollowersNameWithHostRejectSecurity;
}


export class PostServerFollowersNameWithHostRejectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
