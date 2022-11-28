import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSalesTaxJurisdictionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryCode" })
  countryCode: string;
}


export class GetSalesTaxJurisdictionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetSalesTaxJurisdictionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSalesTaxJurisdictionsPathParams;

  @SpeakeasyMetadata()
  security: GetSalesTaxJurisdictionsSecurity;
}


export class GetSalesTaxJurisdictionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesTaxJurisdictions?: shared.SalesTaxJurisdictions;

  @SpeakeasyMetadata()
  statusCode: number;
}
