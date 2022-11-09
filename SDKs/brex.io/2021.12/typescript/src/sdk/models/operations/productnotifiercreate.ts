import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductNotifierCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=uri" })
  uri: string;
}


export class ProductNotifierCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductNotifierCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductNotifierCreatePathParams;

  @Metadata()
  security: ProductNotifierCreateSecurity;
}


export class ProductNotifierCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productNotifierCreate200ApplicationJsonAny?: any;

  @Metadata()
  productNotifierCreateDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
