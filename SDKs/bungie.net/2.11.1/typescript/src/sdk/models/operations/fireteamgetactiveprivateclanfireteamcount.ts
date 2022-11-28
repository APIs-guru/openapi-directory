import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FireteamGetActivePrivateClanFireteamCountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class FireteamGetActivePrivateClanFireteamCountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FireteamGetActivePrivateClanFireteamCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FireteamGetActivePrivateClanFireteamCountPathParams;

  @SpeakeasyMetadata()
  security: FireteamGetActivePrivateClanFireteamCountSecurity;
}


export class FireteamGetActivePrivateClanFireteamCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
