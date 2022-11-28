import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCachedImagePathParams extends SpeakeasyBase {
    imageId: string;
    listingId: string;
}
export declare class GetCachedImageQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetCachedImageRequest extends SpeakeasyBase {
    pathParams: GetCachedImagePathParams;
    queryParams: GetCachedImageQueryParams;
}
export declare class GetCachedImageResponse extends SpeakeasyBase {
    cacheImageResponse?: Uint8Array;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
