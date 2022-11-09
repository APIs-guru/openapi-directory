import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAlbumContextByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=photo_id" })
  photoId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=photoset_id" })
  photosetId?: string;
}


export class GetAlbumContextByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAlbumContextByIdQueryParams;
}


export class GetAlbumContextById200ApplicationJsonCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class GetAlbumContextById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: GetAlbumContextById200ApplicationJsonCount;

  @Metadata({ data: "json, name=nextphoto" })
  nextphoto?: shared.ContextPhoto;

  @Metadata({ data: "json, name=prevphoto" })
  prevphoto?: shared.ContextPhoto;

  @Metadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetAlbumContextByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAlbumContextById200ApplicationJsonObject?: GetAlbumContextById200ApplicationJson;
}
