import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostPlayersPlayerIdLogoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerId" })
  playerId: string;
}


export class PostPlayersPlayerIdLogoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostPlayersPlayerIdLogoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPlayersPlayerIdLogoPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.PlayersUploadLogoPayload;

  @Metadata()
  security: PostPlayersPlayerIdLogoSecurity;
}


export class PostPlayersPlayerIdLogoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  player?: shared.Player;
}
