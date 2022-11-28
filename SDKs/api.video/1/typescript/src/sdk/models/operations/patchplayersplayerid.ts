import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchPlayersPlayerIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerId" })
  playerId: string;
}


export class PatchPlayersPlayerIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchPlayersPlayerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchPlayersPlayerIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Playerinput;

  @SpeakeasyMetadata()
  security: PatchPlayersPlayerIdSecurity;
}


export class PatchPlayersPlayerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  player?: shared.Player;
}
