import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetFoodBrandedSearchPhpDietEnum {
    Vegan = "Vegan",
    Vegetarian = "Vegetarian",
    GlutenFree = "Gluten Free"
}


export class GetFoodBrandedSearchPhpQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allergen" })
  allergen?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=diet" })
  diet?: GetFoodBrandedSearchPhpDietEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ingredient" })
  ingredient?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyword" })
  keyword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mineral" })
  mineral?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nutrient" })
  nutrient?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=palm_oil" })
  palmOil?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trace" })
  trace?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vitamin" })
  vitamin?: string;
}


export class GetFoodBrandedSearchPhpSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetFoodBrandedSearchPhpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFoodBrandedSearchPhpQueryParams;

  @SpeakeasyMetadata()
  security: GetFoodBrandedSearchPhpSecurity;
}


export class GetFoodBrandedSearchPhpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  brandedFoodObject?: shared.BrandedFoodObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
