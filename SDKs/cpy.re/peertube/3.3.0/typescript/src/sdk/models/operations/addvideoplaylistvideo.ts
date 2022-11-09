import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddVideoPlaylistVideoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: number;
}


export class AddVideoPlaylistVideoRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=startTimestamp" })
  startTimestamp?: number;

  @Metadata({ data: "json, name=stopTimestamp" })
  stopTimestamp?: number;

  @Metadata({ data: "json, name=videoId" })
  videoId: any;
}


export class AddVideoPlaylistVideoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AddVideoPlaylistVideoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddVideoPlaylistVideoPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: AddVideoPlaylistVideoRequestBody;

  @Metadata()
  security: AddVideoPlaylistVideoSecurity;
}


export class AddVideoPlaylistVideo200ApplicationJsonVideoPlaylistElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;
}


export class AddVideoPlaylistVideo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=videoPlaylistElement" })
  videoPlaylistElement?: AddVideoPlaylistVideo200ApplicationJsonVideoPlaylistElement;
}


export class AddVideoPlaylistVideoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  addVideoPlaylistVideo200ApplicationJsonObject?: AddVideoPlaylistVideo200ApplicationJson;
}
