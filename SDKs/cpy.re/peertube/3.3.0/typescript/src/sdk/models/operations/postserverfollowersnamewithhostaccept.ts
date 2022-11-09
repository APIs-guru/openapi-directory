import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostServerFollowersNameWithHostAcceptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nameWithHost" })
  nameWithHost: string;
}


export class PostServerFollowersNameWithHostAcceptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostServerFollowersNameWithHostAcceptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServerFollowersNameWithHostAcceptPathParams;

  @Metadata()
  security: PostServerFollowersNameWithHostAcceptSecurity;
}


export class PostServerFollowersNameWithHostAcceptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
