import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostServerFollowersNameWithHostAcceptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nameWithHost" })
  nameWithHost: string;
}


export class PostServerFollowersNameWithHostAcceptSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostServerFollowersNameWithHostAcceptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostServerFollowersNameWithHostAcceptPathParams;

  @SpeakeasyMetadata()
  security: PostServerFollowersNameWithHostAcceptSecurity;
}


export class PostServerFollowersNameWithHostAcceptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
