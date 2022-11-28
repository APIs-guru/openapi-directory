import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutVideoPlaylistVideoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistElementId" })
  playlistElementId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: number;
}


export class PutVideoPlaylistVideoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startTimestamp" })
  startTimestamp?: number;

  @SpeakeasyMetadata({ data: "json, name=stopTimestamp" })
  stopTimestamp?: number;
}


export class PutVideoPlaylistVideoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutVideoPlaylistVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutVideoPlaylistVideoPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutVideoPlaylistVideoRequestBody;

  @SpeakeasyMetadata()
  security: PutVideoPlaylistVideoSecurity;
}


export class PutVideoPlaylistVideoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
