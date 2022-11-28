import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DelVideoPlaylistVideoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistElementId" })
  playlistElementId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: number;
}


export class DelVideoPlaylistVideoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DelVideoPlaylistVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DelVideoPlaylistVideoPathParams;

  @SpeakeasyMetadata()
  security: DelVideoPlaylistVideoSecurity;
}


export class DelVideoPlaylistVideoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
