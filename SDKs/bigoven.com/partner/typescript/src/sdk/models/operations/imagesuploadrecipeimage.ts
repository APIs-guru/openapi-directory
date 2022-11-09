import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImagesUploadRecipeImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: string;
}


export class ImagesUploadRecipeImageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=caption" })
  caption?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lng" })
  lng?: number;
}


export class ImagesUploadRecipeImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ImagesUploadRecipeImagePathParams;

  @Metadata()
  queryParams: ImagesUploadRecipeImageQueryParams;
}


export class ImagesUploadRecipeImageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
