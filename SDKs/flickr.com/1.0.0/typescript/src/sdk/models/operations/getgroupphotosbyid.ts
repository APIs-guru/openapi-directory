import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupPhotosByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;
}


export class GetGroupPhotosById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=photos", elemType: shared.Photo })
  photos?: shared.Photo[];
}


export class GetGroupPhotosByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGroupPhotosByIdQueryParams;
}


export class GetGroupPhotosByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGroupPhotosById200ApplicationJsonObject?: GetGroupPhotosById200ApplicationJson;
}
