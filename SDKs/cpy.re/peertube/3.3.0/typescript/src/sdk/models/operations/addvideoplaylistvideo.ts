import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddVideoPlaylistVideoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: number;
}


export class AddVideoPlaylistVideoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startTimestamp" })
  startTimestamp?: number;

  @SpeakeasyMetadata({ data: "json, name=stopTimestamp" })
  stopTimestamp?: number;

  @SpeakeasyMetadata({ data: "json, name=videoId" })
  videoId: any;
}


export class AddVideoPlaylistVideoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AddVideoPlaylistVideo200ApplicationJsonVideoPlaylistElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}


export class AddVideoPlaylistVideo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videoPlaylistElement" })
  videoPlaylistElement?: AddVideoPlaylistVideo200ApplicationJsonVideoPlaylistElement;
}


export class AddVideoPlaylistVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddVideoPlaylistVideoPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AddVideoPlaylistVideoRequestBody;

  @SpeakeasyMetadata()
  security: AddVideoPlaylistVideoSecurity;
}


export class AddVideoPlaylistVideoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addVideoPlaylistVideo200ApplicationJsonObject?: AddVideoPlaylistVideo200ApplicationJson;
}
