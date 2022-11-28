import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPhotolistContextByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    photoId: string;
    photolistId: string;
}
export declare class GetPhotolistContextById200ApplicationJsonCount extends SpeakeasyBase {
    content?: string;
}
export declare class GetPhotolistContextById200ApplicationJson extends SpeakeasyBase {
    count?: GetPhotolistContextById200ApplicationJsonCount;
    nextphoto?: shared.ContextPhoto;
    prevphoto?: shared.ContextPhoto;
    stat?: string;
}
export declare class GetPhotolistContextByIdRequest extends SpeakeasyBase {
    queryParams: GetPhotolistContextByIdQueryParams;
}
export declare class GetPhotolistContextByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPhotolistContextById200ApplicationJsonObject?: GetPhotolistContextById200ApplicationJson;
}
