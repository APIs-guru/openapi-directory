import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPhotostreamContextByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=photo_id" })
  photoId: string;
}


export class GetPhotostreamContextByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPhotostreamContextByIdQueryParams;
}


export class GetPhotostreamContextById200ApplicationJsonCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class GetPhotostreamContextById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: GetPhotostreamContextById200ApplicationJsonCount;

  @Metadata({ data: "json, name=nextphoto" })
  nextphoto?: shared.ContextPhoto;

  @Metadata({ data: "json, name=prevphoto" })
  prevphoto?: shared.ContextPhoto;

  @Metadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetPhotostreamContextByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPhotostreamContextById200ApplicationJsonObject?: GetPhotostreamContextById200ApplicationJson;
}
