import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteServerFollowersNameWithHostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nameWithHost" })
  nameWithHost: string;
}


export class DeleteServerFollowersNameWithHostSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteServerFollowersNameWithHostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteServerFollowersNameWithHostPathParams;

  @SpeakeasyMetadata()
  security: DeleteServerFollowersNameWithHostSecurity;
}


export class DeleteServerFollowersNameWithHostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
