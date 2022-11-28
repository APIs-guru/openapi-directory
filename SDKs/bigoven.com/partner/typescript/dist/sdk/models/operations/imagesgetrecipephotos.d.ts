import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImagesGetRecipePhotosPathParams extends SpeakeasyBase {
    recipeId: number;
}
export declare class ImagesGetRecipePhotosQueryParams extends SpeakeasyBase {
    pg?: number;
    rpp?: number;
}
export declare class ImagesGetRecipePhotosRequest extends SpeakeasyBase {
    pathParams: ImagesGetRecipePhotosPathParams;
    queryParams: ImagesGetRecipePhotosQueryParams;
}
export declare class ImagesGetRecipePhotosResponse extends SpeakeasyBase {
    api2ControllersWebApiImagesControllerRecipePhotosResponse?: shared.Api2ControllersWebApiImagesControllerRecipePhotosResponse;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
