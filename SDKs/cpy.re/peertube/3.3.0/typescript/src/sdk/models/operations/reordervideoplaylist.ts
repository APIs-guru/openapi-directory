import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReorderVideoPlaylistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: number;
}


export class ReorderVideoPlaylistRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insertAfterPosition" })
  insertAfterPosition: number;

  @SpeakeasyMetadata({ data: "json, name=reorderLength" })
  reorderLength?: number;

  @SpeakeasyMetadata({ data: "json, name=startPosition" })
  startPosition: number;
}


export class ReorderVideoPlaylistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ReorderVideoPlaylistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReorderVideoPlaylistPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReorderVideoPlaylistRequestBody;

  @SpeakeasyMetadata()
  security: ReorderVideoPlaylistSecurity;
}


export class ReorderVideoPlaylistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
