import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSalesTaxesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country_code" })
  countryCode: string;
}


export class GetSalesTaxesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetSalesTaxesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSalesTaxesQueryParams;

  @Metadata()
  security: GetSalesTaxesSecurity;
}


export class GetSalesTaxesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesTaxes?: shared.SalesTaxes;

  @Metadata()
  statusCode: number;
}
