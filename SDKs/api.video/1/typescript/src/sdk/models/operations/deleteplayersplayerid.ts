import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeletePlayersPlayerIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerId" })
  playerId: string;
}


export class DeletePlayersPlayerIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeletePlayersPlayerIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePlayersPlayerIdPathParams;

  @Metadata()
  security: DeletePlayersPlayerIdSecurity;
}


export class DeletePlayersPlayerIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;
}
