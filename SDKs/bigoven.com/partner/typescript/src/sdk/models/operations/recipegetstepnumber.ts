import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecipeGetStepNumberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipeId" })
  recipeId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userName" })
  userName: string;
}


export class RecipeGetStepNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RecipeGetStepNumberQueryParams;
}


export class RecipeGetStepNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  api2Result?: shared.Api2Result;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
