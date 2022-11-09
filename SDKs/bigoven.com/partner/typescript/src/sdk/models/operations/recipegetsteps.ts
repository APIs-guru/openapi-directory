import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecipeGetStepsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=recipeId" })
  recipeId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stepId" })
  stepId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userName" })
  userName: string;
}


export class RecipeGetStepsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RecipeGetStepsQueryParams;
}


export class RecipeGetStepsResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenResult?: shared.BigOvenResult;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
