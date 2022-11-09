import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVideoPlaylistsPlaylistIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: number;
}


export class DeleteVideoPlaylistsPlaylistIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteVideoPlaylistsPlaylistIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVideoPlaylistsPlaylistIdPathParams;

  @Metadata()
  security: DeleteVideoPlaylistsPlaylistIdSecurity;
}


export class DeleteVideoPlaylistsPlaylistIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
