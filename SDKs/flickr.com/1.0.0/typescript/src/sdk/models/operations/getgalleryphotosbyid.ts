import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGalleryPhotosByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gallery_id" })
  galleryId: string;
}


export class GetGalleryPhotosById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=photos", elemType: shared.Photo })
  photos?: shared.Photo[];
}


export class GetGalleryPhotosByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGalleryPhotosByIdQueryParams;
}


export class GetGalleryPhotosByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGalleryPhotosById200ApplicationJsonObject?: GetGalleryPhotosById200ApplicationJson;
}
