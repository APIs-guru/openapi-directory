import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FireteamGetClanFireteamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fireteamId" })
  fireteamId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class FireteamGetClanFireteamSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FireteamGetClanFireteamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FireteamGetClanFireteamPathParams;

  @SpeakeasyMetadata()
  security: FireteamGetClanFireteamSecurity;
}


export class FireteamGetClanFireteamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
