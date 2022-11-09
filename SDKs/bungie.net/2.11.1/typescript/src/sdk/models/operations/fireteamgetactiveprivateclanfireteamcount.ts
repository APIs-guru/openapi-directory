import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FireteamGetActivePrivateClanFireteamCountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class FireteamGetActivePrivateClanFireteamCountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FireteamGetActivePrivateClanFireteamCountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FireteamGetActivePrivateClanFireteamCountPathParams;

  @Metadata()
  security: FireteamGetActivePrivateClanFireteamCountSecurity;
}


export class FireteamGetActivePrivateClanFireteamCountResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
