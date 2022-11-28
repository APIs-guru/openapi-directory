import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecipeGetActiveRecipeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userName" })
  userName: string;
}


export class RecipeGetActiveRecipeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RecipeGetActiveRecipeQueryParams;
}


export class RecipeGetActiveRecipeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenResult?: shared.BigOvenResult;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
