import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAlbumByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=photoset_id" })
  photosetId: string;
}


export class GetAlbumByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAlbumByIdQueryParams;
}


export class GetAlbumById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=photoset", elemType: shared.Photo })
  photoset?: shared.Photo[];
}


export class GetAlbumByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAlbumById200ApplicationJsonObject?: GetAlbumById200ApplicationJson;
}
