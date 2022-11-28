import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlbumContextByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_id" })
  photoId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photoset_id" })
  photosetId?: string;
}


export class GetAlbumContextById200ApplicationJsonCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class GetAlbumContextById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: GetAlbumContextById200ApplicationJsonCount;

  @SpeakeasyMetadata({ data: "json, name=nextphoto" })
  nextphoto?: shared.ContextPhoto;

  @SpeakeasyMetadata({ data: "json, name=prevphoto" })
  prevphoto?: shared.ContextPhoto;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetAlbumContextByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAlbumContextByIdQueryParams;
}


export class GetAlbumContextByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAlbumContextById200ApplicationJsonObject?: GetAlbumContextById200ApplicationJson;
}
