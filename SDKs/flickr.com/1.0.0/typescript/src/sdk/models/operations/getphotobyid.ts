import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPhotoByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=photo_id" })
  photoId: string;
}


export class GetPhotoByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPhotoByIdQueryParams;
}


export class GetPhotoById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=photo" })
  photo?: shared.Photo;

  @Metadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetPhotoByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPhotoById200ApplicationJsonObject?: GetPhotoById200ApplicationJson;
}
