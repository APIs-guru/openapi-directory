import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPhotoByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    photoId: string;
}
export declare class GetPhotoById200ApplicationJson extends SpeakeasyBase {
    photo?: shared.Photo;
    stat?: string;
}
export declare class GetPhotoByIdRequest extends SpeakeasyBase {
    queryParams: GetPhotoByIdQueryParams;
}
export declare class GetPhotoByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPhotoById200ApplicationJsonObject?: GetPhotoById200ApplicationJson;
}
