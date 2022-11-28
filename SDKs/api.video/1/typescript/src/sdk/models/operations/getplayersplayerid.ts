import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlayersPlayerIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerId" })
  playerId: string;
}


export class GetPlayersPlayerIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetPlayersPlayerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPlayersPlayerIdPathParams;

  @SpeakeasyMetadata()
  security: GetPlayersPlayerIdSecurity;
}


export class GetPlayersPlayerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  player?: shared.Player;
}
