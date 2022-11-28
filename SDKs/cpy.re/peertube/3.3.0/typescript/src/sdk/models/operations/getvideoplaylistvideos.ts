import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVideoPlaylistVideosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: number;
}


export class GetVideoPlaylistVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoPlaylistVideosPathParams;
}


export class GetVideoPlaylistVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoListResponse?: any;
}
