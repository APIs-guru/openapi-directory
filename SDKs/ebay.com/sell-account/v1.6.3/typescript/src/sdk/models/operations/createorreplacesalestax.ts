import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateOrReplaceSalesTaxPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryCode" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jurisdictionId" })
  jurisdictionId: string;
}


export class CreateOrReplaceSalesTaxSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateOrReplaceSalesTaxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateOrReplaceSalesTaxPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SalesTaxBase;

  @SpeakeasyMetadata()
  security: CreateOrReplaceSalesTaxSecurity;
}


export class CreateOrReplaceSalesTaxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
