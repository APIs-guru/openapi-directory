import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupPhotosByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    groupId?: string;
}
export declare class GetGroupPhotosById200ApplicationJson extends SpeakeasyBase {
    photos?: shared.Photo[];
}
export declare class GetGroupPhotosByIdRequest extends SpeakeasyBase {
    queryParams: GetGroupPhotosByIdQueryParams;
}
export declare class GetGroupPhotosByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getGroupPhotosById200ApplicationJsonObject?: GetGroupPhotosById200ApplicationJson;
}
