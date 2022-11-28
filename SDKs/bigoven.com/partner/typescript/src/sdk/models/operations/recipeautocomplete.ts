import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RecipeAutoCompleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class RecipeAutoCompleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RecipeAutoCompleteQueryParams;
}


export class RecipeAutoCompleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  recipeAutoComplete200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  recipeAutoComplete200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
