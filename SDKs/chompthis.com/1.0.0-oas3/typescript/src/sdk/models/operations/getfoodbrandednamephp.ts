import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFoodBrandedNamePhpQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetFoodBrandedNamePhpSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetFoodBrandedNamePhpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFoodBrandedNamePhpQueryParams;

  @SpeakeasyMetadata()
  security: GetFoodBrandedNamePhpSecurity;
}


export class GetFoodBrandedNamePhpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  brandedFoodObject?: shared.BrandedFoodObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
