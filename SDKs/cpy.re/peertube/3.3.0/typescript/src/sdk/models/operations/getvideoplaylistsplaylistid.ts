import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVideoPlaylistsPlaylistIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: number;
}


export class GetVideoPlaylistsPlaylistIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoPlaylistsPlaylistIdPathParams;
}


export class GetVideoPlaylistsPlaylistIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoPlaylist?: any;
}
