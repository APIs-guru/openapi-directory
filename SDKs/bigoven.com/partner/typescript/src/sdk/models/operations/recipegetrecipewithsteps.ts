import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecipeGetRecipeWithStepsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RecipeGetRecipeWithStepsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prefetch" })
  prefetch?: boolean;
}


export class RecipeGetRecipeWithStepsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecipeGetRecipeWithStepsPathParams;

  @SpeakeasyMetadata()
  queryParams: RecipeGetRecipeWithStepsQueryParams;
}


export class RecipeGetRecipeWithStepsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApi2Recipe?: shared.BigOvenModelApi2Recipe;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
