import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateOrReplaceSalesTaxPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=countryCode" })
  countryCode: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=jurisdictionId" })
  jurisdictionId: string;
}


export class CreateOrReplaceSalesTaxSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateOrReplaceSalesTaxRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateOrReplaceSalesTaxPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SalesTaxBase;

  @Metadata()
  security: CreateOrReplaceSalesTaxSecurity;
}


export class CreateOrReplaceSalesTaxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
