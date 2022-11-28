import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFoodIngredientSearchPhpQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=find" })
  find: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetFoodIngredientSearchPhpSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetFoodIngredientSearchPhpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFoodIngredientSearchPhpQueryParams;

  @SpeakeasyMetadata()
  security: GetFoodIngredientSearchPhpSecurity;
}


export class GetFoodIngredientSearchPhpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ingredientObject?: shared.IngredientObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
