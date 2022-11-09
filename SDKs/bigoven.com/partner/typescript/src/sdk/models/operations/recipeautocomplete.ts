import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RecipeAutoCompleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class RecipeAutoCompleteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RecipeAutoCompleteQueryParams;
}


export class RecipeAutoCompleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  recipeAutoComplete200ApplicationJsonStrings?: string[];

  @Metadata()
  recipeAutoComplete200TextJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
