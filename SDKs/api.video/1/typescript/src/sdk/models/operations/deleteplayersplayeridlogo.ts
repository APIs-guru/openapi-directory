import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeletePlayersPlayerIdLogoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerId" })
  playerId: string;
}


export class DeletePlayersPlayerIdLogoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeletePlayersPlayerIdLogoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePlayersPlayerIdLogoPathParams;

  @SpeakeasyMetadata()
  security: DeletePlayersPlayerIdLogoSecurity;
}


export class DeletePlayersPlayerIdLogoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deletePlayersPlayerIdLogo204ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;
}
