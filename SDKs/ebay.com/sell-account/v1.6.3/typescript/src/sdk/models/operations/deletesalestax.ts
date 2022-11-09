import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSalesTaxPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=countryCode" })
  countryCode: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=jurisdictionId" })
  jurisdictionId: string;
}


export class DeleteSalesTaxSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class DeleteSalesTaxRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSalesTaxPathParams;

  @Metadata()
  security: DeleteSalesTaxSecurity;
}


export class DeleteSalesTaxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
