import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DelVideoPlaylistVideoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlistElementId" })
  playlistElementId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: number;
}


export class DelVideoPlaylistVideoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DelVideoPlaylistVideoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DelVideoPlaylistVideoPathParams;

  @Metadata()
  security: DelVideoPlaylistVideoSecurity;
}


export class DelVideoPlaylistVideoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
