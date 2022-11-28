import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=epid" })
  epid: string;
}


export class GetProductSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductPathParams;

  @SpeakeasyMetadata()
  security: GetProductSecurity;
}


export class GetProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  product?: shared.Product;

  @SpeakeasyMetadata()
  statusCode: number;
}
