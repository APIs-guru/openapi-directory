import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sku" })
  sku: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subjectId" })
  subjectId: string;
}


export class ProductOrderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductOrderPathParams;

  @SpeakeasyMetadata()
  security: ProductOrderSecurity;
}


export class ProductOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productOrder200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  productOrderDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
