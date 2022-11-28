import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPlayersPlayerIdLogoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerId" })
  playerId: string;
}


export class PostPlayersPlayerIdLogoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostPlayersPlayerIdLogoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPlayersPlayerIdLogoPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.PlayersUploadLogoPayload;

  @SpeakeasyMetadata()
  security: PostPlayersPlayerIdLogoSecurity;
}


export class PostPlayersPlayerIdLogoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  badRequest?: shared.BadRequest;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  player?: shared.Player;
}
