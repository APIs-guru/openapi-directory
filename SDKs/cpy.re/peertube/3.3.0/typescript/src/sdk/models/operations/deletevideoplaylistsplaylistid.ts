import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVideoPlaylistsPlaylistIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: number;
}


export class DeleteVideoPlaylistsPlaylistIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteVideoPlaylistsPlaylistIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVideoPlaylistsPlaylistIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteVideoPlaylistsPlaylistIdSecurity;
}


export class DeleteVideoPlaylistsPlaylistIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
