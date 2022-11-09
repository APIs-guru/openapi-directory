import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVideoPlaylistsPlaylistIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: number;
}


export class GetVideoPlaylistsPlaylistIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideoPlaylistsPlaylistIdPathParams;
}


export class GetVideoPlaylistsPlaylistIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoPlaylist?: any;
}
