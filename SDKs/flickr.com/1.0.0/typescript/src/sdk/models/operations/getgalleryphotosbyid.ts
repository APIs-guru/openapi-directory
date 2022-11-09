import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGalleryPhotosByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gallery_id" })
  galleryId: string;
}


export class GetGalleryPhotosByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGalleryPhotosByIdQueryParams;
}


export class GetGalleryPhotosById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=photos", elemType: shared.Photo })
  photos?: shared.Photo[];
}


export class GetGalleryPhotosByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getGalleryPhotosById200ApplicationJsonObject?: GetGalleryPhotosById200ApplicationJson;
}
