import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGroupPhotosByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;
}


export class GetGroupPhotosByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGroupPhotosByIdQueryParams;
}


export class GetGroupPhotosById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=photos", elemType: shared.Photo })
  photos?: shared.Photo[];
}


export class GetGroupPhotosByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getGroupPhotosById200ApplicationJsonObject?: GetGroupPhotosById200ApplicationJson;
}
