import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImagesUploadRecipeImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: string;
}


export class ImagesUploadRecipeImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lng" })
  lng?: number;
}


export class ImagesUploadRecipeImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImagesUploadRecipeImagePathParams;

  @SpeakeasyMetadata()
  queryParams: ImagesUploadRecipeImageQueryParams;
}


export class ImagesUploadRecipeImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
