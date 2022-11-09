import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReorderVideoPlaylistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: number;
}


export class ReorderVideoPlaylistRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=insertAfterPosition" })
  insertAfterPosition: number;

  @Metadata({ data: "json, name=reorderLength" })
  reorderLength?: number;

  @Metadata({ data: "json, name=startPosition" })
  startPosition: number;
}


export class ReorderVideoPlaylistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ReorderVideoPlaylistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReorderVideoPlaylistPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReorderVideoPlaylistRequestBody;

  @Metadata()
  security: ReorderVideoPlaylistSecurity;
}


export class ReorderVideoPlaylistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
