import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPhotoSizesByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    photoId: string;
}
export declare class GetPhotoSizesById200ApplicationJsonSizes extends SpeakeasyBase {
    canblog?: number;
    candownload?: number;
    canprint?: number;
    sizes?: shared.Size[];
}
export declare class GetPhotoSizesById200ApplicationJson extends SpeakeasyBase {
    sizes?: GetPhotoSizesById200ApplicationJsonSizes;
    stat?: string;
}
export declare class GetPhotoSizesByIdRequest extends SpeakeasyBase {
    queryParams: GetPhotoSizesByIdQueryParams;
}
export declare class GetPhotoSizesByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPhotoSizesById200ApplicationJsonObject?: GetPhotoSizesById200ApplicationJson;
}
