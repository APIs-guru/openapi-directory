import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersMeVideoPlaylistsVideosExistQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoIds" })
  videoIds: number[];
}


export class GetUsersMeVideoPlaylistsVideosExistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=playlistElementId" })
  playlistElementId?: number;

  @SpeakeasyMetadata({ data: "json, name=playlistId" })
  playlistId?: number;

  @SpeakeasyMetadata({ data: "json, name=startTimestamp" })
  startTimestamp?: number;

  @SpeakeasyMetadata({ data: "json, name=stopTimestamp" })
  stopTimestamp?: number;
}


export class GetUsersMeVideoPlaylistsVideosExist200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videoId", elemType: GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId })
  videoId?: GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId[];
}


export class GetUsersMeVideoPlaylistsVideosExistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUsersMeVideoPlaylistsVideosExistQueryParams;

  @SpeakeasyMetadata()
  security: GetUsersMeVideoPlaylistsVideosExistSecurity;
}


export class GetUsersMeVideoPlaylistsVideosExistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUsersMeVideoPlaylistsVideosExist200ApplicationJsonObject?: GetUsersMeVideoPlaylistsVideosExist200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
