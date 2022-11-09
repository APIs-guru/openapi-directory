import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFavoritesContextByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=photo_id" })
  photoId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: string;
}


export class GetFavoritesContextByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFavoritesContextByIdQueryParams;
}


export class GetFavoritesContextById200ApplicationJsonCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class GetFavoritesContextById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: GetFavoritesContextById200ApplicationJsonCount;

  @Metadata({ data: "json, name=nextphoto" })
  nextphoto?: shared.ContextPhoto;

  @Metadata({ data: "json, name=prevphoto" })
  prevphoto?: shared.ContextPhoto;

  @Metadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetFavoritesContextByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getFavoritesContextById200ApplicationJsonObject?: GetFavoritesContextById200ApplicationJson;
}
