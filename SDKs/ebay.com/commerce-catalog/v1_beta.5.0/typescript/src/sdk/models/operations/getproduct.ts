import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=epid" })
  epid: string;
}


export class GetProductSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetProductRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductPathParams;

  @Metadata()
  security: GetProductSecurity;
}


export class GetProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  product?: shared.Product;

  @Metadata()
  statusCode: number;
}
