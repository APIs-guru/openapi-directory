import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class ProductStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductStatusPathParams;

  @Metadata()
  security: ProductStatusSecurity;
}


export class ProductStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productStatus200ApplicationJsonAny?: any;

  @Metadata()
  productStatusDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
