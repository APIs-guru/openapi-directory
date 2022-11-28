import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPhotolistContextByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_id" })
  photoId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photolist_id" })
  photolistId: string;
}


export class GetPhotolistContextById200ApplicationJsonCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class GetPhotolistContextById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: GetPhotolistContextById200ApplicationJsonCount;

  @SpeakeasyMetadata({ data: "json, name=nextphoto" })
  nextphoto?: shared.ContextPhoto;

  @SpeakeasyMetadata({ data: "json, name=prevphoto" })
  prevphoto?: shared.ContextPhoto;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetPhotolistContextByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPhotolistContextByIdQueryParams;
}


export class GetPhotolistContextByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPhotolistContextById200ApplicationJsonObject?: GetPhotolistContextById200ApplicationJson;
}
