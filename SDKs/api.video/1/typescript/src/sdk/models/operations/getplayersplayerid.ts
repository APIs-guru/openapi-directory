import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPlayersPlayerIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerId" })
  playerId: string;
}


export class GetPlayersPlayerIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetPlayersPlayerIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPlayersPlayerIdPathParams;

  @Metadata()
  security: GetPlayersPlayerIdSecurity;
}


export class GetPlayersPlayerIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  player?: shared.Player;
}
