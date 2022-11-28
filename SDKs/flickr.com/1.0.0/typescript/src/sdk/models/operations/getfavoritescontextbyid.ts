import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFavoritesContextByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_id" })
  photoId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: string;
}


export class GetFavoritesContextById200ApplicationJsonCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class GetFavoritesContextById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: GetFavoritesContextById200ApplicationJsonCount;

  @SpeakeasyMetadata({ data: "json, name=nextphoto" })
  nextphoto?: shared.ContextPhoto;

  @SpeakeasyMetadata({ data: "json, name=prevphoto" })
  prevphoto?: shared.ContextPhoto;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetFavoritesContextByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFavoritesContextByIdQueryParams;
}


export class GetFavoritesContextByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFavoritesContextById200ApplicationJsonObject?: GetFavoritesContextById200ApplicationJson;
}
