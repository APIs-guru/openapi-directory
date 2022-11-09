import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutVideoPlaylistVideoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlistElementId" })
  playlistElementId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: number;
}


export class PutVideoPlaylistVideoRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=startTimestamp" })
  startTimestamp?: number;

  @Metadata({ data: "json, name=stopTimestamp" })
  stopTimestamp?: number;
}


export class PutVideoPlaylistVideoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutVideoPlaylistVideoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutVideoPlaylistVideoPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutVideoPlaylistVideoRequestBody;

  @Metadata()
  security: PutVideoPlaylistVideoSecurity;
}


export class PutVideoPlaylistVideoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
