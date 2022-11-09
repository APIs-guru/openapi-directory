import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecipeGetV2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RecipeGetV2QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=prefetch" })
  prefetch?: boolean;
}


export class RecipeGetV2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: RecipeGetV2PathParams;

  @Metadata()
  queryParams: RecipeGetV2QueryParams;
}


export class RecipeGetV2Response extends SpeakeasyBase {
  @Metadata()
  api2ModelsRecipesRecipeResponse?: shared.Api2ModelsRecipesRecipeResponse;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
