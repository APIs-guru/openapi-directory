import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecipeGetActiveRecipeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userName" })
  userName: string;
}


export class RecipeGetActiveRecipeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RecipeGetActiveRecipeQueryParams;
}


export class RecipeGetActiveRecipeResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenResult?: shared.BigOvenResult;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
