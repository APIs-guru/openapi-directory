import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RecipeGetStepQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipeId" })
  recipeId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stepId" })
  stepId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userName" })
  userName: string;
}


export class RecipeGetStepRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RecipeGetStepQueryParams;
}


export class RecipeGetStepResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  recipeGetStep200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  recipeGetStep200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  recipeGetStep200TextJsonString?: string;

  @SpeakeasyMetadata()
  recipeGetStep200TextXmlString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
