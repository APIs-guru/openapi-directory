import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPhotoByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_id" })
  photoId: string;
}


export class GetPhotoById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=photo" })
  photo?: shared.Photo;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetPhotoByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPhotoByIdQueryParams;
}


export class GetPhotoByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPhotoById200ApplicationJsonObject?: GetPhotoById200ApplicationJson;
}
