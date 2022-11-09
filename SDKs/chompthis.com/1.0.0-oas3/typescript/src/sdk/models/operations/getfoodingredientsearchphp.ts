import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFoodIngredientSearchPhpQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=find" })
  find: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetFoodIngredientSearchPhpSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetFoodIngredientSearchPhpRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFoodIngredientSearchPhpQueryParams;

  @Metadata()
  security: GetFoodIngredientSearchPhpSecurity;
}


export class GetFoodIngredientSearchPhpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ingredientObject?: shared.IngredientObject;

  @Metadata()
  statusCode: number;
}
