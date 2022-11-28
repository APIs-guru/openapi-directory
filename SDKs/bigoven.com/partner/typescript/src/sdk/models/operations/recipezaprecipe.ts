import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RecipeZapRecipePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RecipeZapRecipeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecipeZapRecipePathParams;
}


export class RecipeZapRecipeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
