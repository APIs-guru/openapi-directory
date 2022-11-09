import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeletePlayersPlayerIdLogoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerId" })
  playerId: string;
}


export class DeletePlayersPlayerIdLogoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeletePlayersPlayerIdLogoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePlayersPlayerIdLogoPathParams;

  @Metadata()
  security: DeletePlayersPlayerIdLogoSecurity;
}


export class DeletePlayersPlayerIdLogoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deletePlayersPlayerIdLogo204ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;
}
