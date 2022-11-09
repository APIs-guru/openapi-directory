import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFoodBrandedBarcodePhpQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=code" })
  code: string;
}


export class GetFoodBrandedBarcodePhpSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetFoodBrandedBarcodePhpRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFoodBrandedBarcodePhpQueryParams;

  @Metadata()
  security: GetFoodBrandedBarcodePhpSecurity;
}


export class GetFoodBrandedBarcodePhpResponse extends SpeakeasyBase {
  @Metadata()
  brandedFoodObject?: shared.BrandedFoodObject;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
