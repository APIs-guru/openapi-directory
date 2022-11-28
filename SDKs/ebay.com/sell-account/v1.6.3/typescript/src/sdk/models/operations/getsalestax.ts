import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSalesTaxPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryCode" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jurisdictionId" })
  jurisdictionId: string;
}


export class GetSalesTaxSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetSalesTaxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSalesTaxPathParams;

  @SpeakeasyMetadata()
  security: GetSalesTaxSecurity;
}


export class GetSalesTaxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesTax?: shared.SalesTax;

  @SpeakeasyMetadata()
  statusCode: number;
}
