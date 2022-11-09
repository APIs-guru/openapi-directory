import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPlaylistsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetPlaylistsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPlaylistsQueryParams;
}


export class GetPlaylists200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: any[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class GetPlaylistsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPlaylists200ApplicationJsonObject?: GetPlaylists200ApplicationJson;
}
