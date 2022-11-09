import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FireteamGetClanFireteamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fireteamId" })
  fireteamId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class FireteamGetClanFireteamSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FireteamGetClanFireteamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FireteamGetClanFireteamPathParams;

  @Metadata()
  security: FireteamGetClanFireteamSecurity;
}


export class FireteamGetClanFireteamResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
