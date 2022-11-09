import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersMeVideoPlaylistsVideosExistQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=videoIds" })
  videoIds: number[];
}


export class GetUsersMeVideoPlaylistsVideosExistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersMeVideoPlaylistsVideosExistRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUsersMeVideoPlaylistsVideosExistQueryParams;

  @Metadata()
  security: GetUsersMeVideoPlaylistsVideosExistSecurity;
}


export class GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId extends SpeakeasyBase {
  @Metadata({ data: "json, name=playlistElementId" })
  playlistElementId?: number;

  @Metadata({ data: "json, name=playlistId" })
  playlistId?: number;

  @Metadata({ data: "json, name=startTimestamp" })
  startTimestamp?: number;

  @Metadata({ data: "json, name=stopTimestamp" })
  stopTimestamp?: number;
}


export class GetUsersMeVideoPlaylistsVideosExist200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=videoId", elemType: operations.GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId })
  videoId?: GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId[];
}


export class GetUsersMeVideoPlaylistsVideosExistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getUsersMeVideoPlaylistsVideosExist200ApplicationJsonObject?: GetUsersMeVideoPlaylistsVideosExist200ApplicationJson;

  @Metadata()
  statusCode: number;
}
