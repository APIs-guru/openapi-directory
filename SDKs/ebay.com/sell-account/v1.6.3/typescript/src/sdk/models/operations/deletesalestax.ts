import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSalesTaxPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryCode" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jurisdictionId" })
  jurisdictionId: string;
}


export class DeleteSalesTaxSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class DeleteSalesTaxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSalesTaxPathParams;

  @SpeakeasyMetadata()
  security: DeleteSalesTaxSecurity;
}


export class DeleteSalesTaxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
