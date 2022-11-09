import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecipeGetRecipeWithStepsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RecipeGetRecipeWithStepsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=prefetch" })
  prefetch?: boolean;
}


export class RecipeGetRecipeWithStepsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RecipeGetRecipeWithStepsPathParams;

  @Metadata()
  queryParams: RecipeGetRecipeWithStepsQueryParams;
}


export class RecipeGetRecipeWithStepsResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApi2Recipe?: shared.BigOvenModelApi2Recipe;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
