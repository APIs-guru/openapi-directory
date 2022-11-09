import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPhotolistContextByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=photo_id" })
  photoId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=photolist_id" })
  photolistId: string;
}


export class GetPhotolistContextByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPhotolistContextByIdQueryParams;
}


export class GetPhotolistContextById200ApplicationJsonCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class GetPhotolistContextById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: GetPhotolistContextById200ApplicationJsonCount;

  @Metadata({ data: "json, name=nextphoto" })
  nextphoto?: shared.ContextPhoto;

  @Metadata({ data: "json, name=prevphoto" })
  prevphoto?: shared.ContextPhoto;

  @Metadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetPhotolistContextByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPhotolistContextById200ApplicationJsonObject?: GetPhotolistContextById200ApplicationJson;
}
