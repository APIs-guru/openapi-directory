import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGalleryPhotosByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    galleryId: string;
}
export declare class GetGalleryPhotosById200ApplicationJson extends SpeakeasyBase {
    photos?: shared.Photo[];
}
export declare class GetGalleryPhotosByIdRequest extends SpeakeasyBase {
    queryParams: GetGalleryPhotosByIdQueryParams;
}
export declare class GetGalleryPhotosByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getGalleryPhotosById200ApplicationJsonObject?: GetGalleryPhotosById200ApplicationJson;
}
