import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecipeGetStepsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipeId" })
  recipeId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stepId" })
  stepId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userName" })
  userName: string;
}


export class RecipeGetStepsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RecipeGetStepsQueryParams;
}


export class RecipeGetStepsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenResult?: shared.BigOvenResult;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
