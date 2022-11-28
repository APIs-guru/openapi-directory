import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImagesUploadRecipeImagePathParams extends SpeakeasyBase {
    recipeId: string;
}
export declare class ImagesUploadRecipeImageQueryParams extends SpeakeasyBase {
    caption?: string;
    lat?: number;
    lng?: number;
}
export declare class ImagesUploadRecipeImageRequest extends SpeakeasyBase {
    pathParams: ImagesUploadRecipeImagePathParams;
    queryParams: ImagesUploadRecipeImageQueryParams;
}
export declare class ImagesUploadRecipeImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
