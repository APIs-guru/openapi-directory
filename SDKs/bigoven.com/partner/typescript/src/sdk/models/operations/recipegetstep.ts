import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RecipeGetStepQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=recipeId" })
  recipeId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stepId" })
  stepId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userName" })
  userName: string;
}


export class RecipeGetStepRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RecipeGetStepQueryParams;
}


export class RecipeGetStepResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  recipeGetStep200ApplicationJsonString?: string;

  @Metadata()
  recipeGetStep200ApplicationXmlString?: string;

  @Metadata()
  recipeGetStep200TextJsonString?: string;

  @Metadata()
  recipeGetStep200TextXmlString?: string;

  @Metadata()
  statusCode: number;
}
