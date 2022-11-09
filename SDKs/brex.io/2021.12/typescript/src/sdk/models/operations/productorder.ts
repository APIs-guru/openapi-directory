import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sku" })
  sku: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subjectId" })
  subjectId: string;
}


export class ProductOrderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductOrderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductOrderPathParams;

  @Metadata()
  security: ProductOrderSecurity;
}


export class ProductOrderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productOrder200ApplicationJsonAny?: any;

  @Metadata()
  productOrderDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
