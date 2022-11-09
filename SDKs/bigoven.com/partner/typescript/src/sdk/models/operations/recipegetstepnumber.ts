import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecipeGetStepNumberQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=recipeId" })
  recipeId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userName" })
  userName: string;
}


export class RecipeGetStepNumberRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RecipeGetStepNumberQueryParams;
}


export class RecipeGetStepNumberResponse extends SpeakeasyBase {
  @Metadata()
  api2Result?: shared.Api2Result;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
