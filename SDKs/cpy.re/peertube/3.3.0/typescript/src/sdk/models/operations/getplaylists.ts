import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPlaylistsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetPlaylists200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class GetPlaylistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPlaylistsQueryParams;
}


export class GetPlaylistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPlaylists200ApplicationJsonObject?: GetPlaylists200ApplicationJson;
}
