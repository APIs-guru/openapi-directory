import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSalesTaxesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country_code" })
  countryCode: string;
}


export class GetSalesTaxesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetSalesTaxesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSalesTaxesQueryParams;

  @SpeakeasyMetadata()
  security: GetSalesTaxesSecurity;
}


export class GetSalesTaxesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesTaxes?: shared.SalesTaxes;

  @SpeakeasyMetadata()
  statusCode: number;
}
