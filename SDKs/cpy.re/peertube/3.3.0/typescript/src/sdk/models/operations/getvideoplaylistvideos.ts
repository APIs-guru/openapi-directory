import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVideoPlaylistVideosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: number;
}


export class GetVideoPlaylistVideosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideoPlaylistVideosPathParams;
}


export class GetVideoPlaylistVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoListResponse?: any;
}
