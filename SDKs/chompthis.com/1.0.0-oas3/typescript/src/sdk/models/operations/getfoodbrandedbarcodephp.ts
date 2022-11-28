import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFoodBrandedBarcodePhpQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
  code: string;
}


export class GetFoodBrandedBarcodePhpSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetFoodBrandedBarcodePhpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFoodBrandedBarcodePhpQueryParams;

  @SpeakeasyMetadata()
  security: GetFoodBrandedBarcodePhpSecurity;
}


export class GetFoodBrandedBarcodePhpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  brandedFoodObject?: shared.BrandedFoodObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
