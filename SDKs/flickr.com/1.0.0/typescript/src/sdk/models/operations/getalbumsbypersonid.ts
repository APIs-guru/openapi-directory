import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAlbumsByPersonIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId: string;
}


export class GetAlbumsByPersonIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAlbumsByPersonIdQueryParams;
}


export class GetAlbumsByPersonId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=perpage" })
  perpage?: number;

  @Metadata({ data: "json, name=photosets", elemType: shared.Album })
  photosets?: shared.Album[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class GetAlbumsByPersonIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAlbumsByPersonId200ApplicationJsonObject?: GetAlbumsByPersonId200ApplicationJson;
}
