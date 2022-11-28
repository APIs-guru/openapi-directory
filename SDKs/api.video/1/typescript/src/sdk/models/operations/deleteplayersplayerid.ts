import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeletePlayersPlayerIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerId" })
  playerId: string;
}


export class DeletePlayersPlayerIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeletePlayersPlayerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePlayersPlayerIdPathParams;

  @SpeakeasyMetadata()
  security: DeletePlayersPlayerIdSecurity;
}


export class DeletePlayersPlayerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;
}
