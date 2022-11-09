import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFoodBrandedNamePhpQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetFoodBrandedNamePhpSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetFoodBrandedNamePhpRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFoodBrandedNamePhpQueryParams;

  @Metadata()
  security: GetFoodBrandedNamePhpSecurity;
}


export class GetFoodBrandedNamePhpResponse extends SpeakeasyBase {
  @Metadata()
  brandedFoodObject?: shared.BrandedFoodObject;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
