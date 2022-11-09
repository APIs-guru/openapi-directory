import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetFoodBrandedSearchPhpDietEnum {
    Vegan = "Vegan"
,    Vegetarian = "Vegetarian"
,    GlutenFree = "Gluten Free"
}


export class GetFoodBrandedSearchPhpQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=allergen" })
  allergen?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=brand" })
  brand?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=diet" })
  diet?: GetFoodBrandedSearchPhpDietEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ingredient" })
  ingredient?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=keyword" })
  keyword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mineral" })
  mineral?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nutrient" })
  nutrient?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=palm_oil" })
  palmOil?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trace" })
  trace?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vitamin" })
  vitamin?: string;
}


export class GetFoodBrandedSearchPhpSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetFoodBrandedSearchPhpRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFoodBrandedSearchPhpQueryParams;

  @Metadata()
  security: GetFoodBrandedSearchPhpSecurity;
}


export class GetFoodBrandedSearchPhpResponse extends SpeakeasyBase {
  @Metadata()
  brandedFoodObject?: shared.BrandedFoodObject;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
