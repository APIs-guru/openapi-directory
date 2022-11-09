import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchPlayersPlayerIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerId" })
  playerId: string;
}


export class PatchPlayersPlayerIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchPlayersPlayerIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchPlayersPlayerIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Playerinput;

  @Metadata()
  security: PatchPlayersPlayerIdSecurity;
}


export class PatchPlayersPlayerIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  player?: shared.Player;
}
