import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImagesGetRecipePhotosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class ImagesGetRecipePhotosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;
}


export class ImagesGetRecipePhotosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ImagesGetRecipePhotosPathParams;

  @Metadata()
  queryParams: ImagesGetRecipePhotosQueryParams;
}


export class ImagesGetRecipePhotosResponse extends SpeakeasyBase {
  @Metadata()
  api2ControllersWebApiImagesControllerRecipePhotosResponse?: shared.Api2ControllersWebApiImagesControllerRecipePhotosResponse;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
