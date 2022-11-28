import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlbumsByPersonIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId: string;
}


export class GetAlbumsByPersonId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=perpage" })
  perpage?: number;

  @SpeakeasyMetadata({ data: "json, name=photosets", elemType: shared.Album })
  photosets?: shared.Album[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class GetAlbumsByPersonIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAlbumsByPersonIdQueryParams;
}


export class GetAlbumsByPersonIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAlbumsByPersonId200ApplicationJsonObject?: GetAlbumsByPersonId200ApplicationJson;
}
