import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlbumByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photoset_id" })
  photosetId: string;
}


export class GetAlbumById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=photoset", elemType: shared.Photo })
  photoset?: shared.Photo[];
}


export class GetAlbumByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAlbumByIdQueryParams;
}


export class GetAlbumByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAlbumById200ApplicationJsonObject?: GetAlbumById200ApplicationJson;
}
