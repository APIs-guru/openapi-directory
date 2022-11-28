import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecipeGetV2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RecipeGetV2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prefetch" })
  prefetch?: boolean;
}


export class RecipeGetV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecipeGetV2PathParams;

  @SpeakeasyMetadata()
  queryParams: RecipeGetV2QueryParams;
}


export class RecipeGetV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  api2ModelsRecipesRecipeResponse?: shared.Api2ModelsRecipesRecipeResponse;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
