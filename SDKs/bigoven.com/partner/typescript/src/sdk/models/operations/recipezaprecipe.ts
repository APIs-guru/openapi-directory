import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RecipeZapRecipePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RecipeZapRecipeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RecipeZapRecipePathParams;
}


export class RecipeZapRecipeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
