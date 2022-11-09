import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSalesTaxJurisdictionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=countryCode" })
  countryCode: string;
}


export class GetSalesTaxJurisdictionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetSalesTaxJurisdictionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSalesTaxJurisdictionsPathParams;

  @Metadata()
  security: GetSalesTaxJurisdictionsSecurity;
}


export class GetSalesTaxJurisdictionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesTaxJurisdictions?: shared.SalesTaxJurisdictions;

  @Metadata()
  statusCode: number;
}
