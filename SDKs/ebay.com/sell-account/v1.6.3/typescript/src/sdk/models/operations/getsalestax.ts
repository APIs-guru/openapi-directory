import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSalesTaxPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=countryCode" })
  countryCode: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=jurisdictionId" })
  jurisdictionId: string;
}


export class GetSalesTaxSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetSalesTaxRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSalesTaxPathParams;

  @Metadata()
  security: GetSalesTaxSecurity;
}


export class GetSalesTaxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesTax?: shared.SalesTax;

  @Metadata()
  statusCode: number;
}
