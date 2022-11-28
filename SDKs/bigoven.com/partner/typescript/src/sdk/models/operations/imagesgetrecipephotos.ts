import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImagesGetRecipePhotosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class ImagesGetRecipePhotosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;
}


export class ImagesGetRecipePhotosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImagesGetRecipePhotosPathParams;

  @SpeakeasyMetadata()
  queryParams: ImagesGetRecipePhotosQueryParams;
}


export class ImagesGetRecipePhotosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  api2ControllersWebApiImagesControllerRecipePhotosResponse?: shared.Api2ControllersWebApiImagesControllerRecipePhotosResponse;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
