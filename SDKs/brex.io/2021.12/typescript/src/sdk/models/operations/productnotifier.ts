import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductNotifierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=notifierId" })
  notifierId: string;
}


export class ProductNotifierSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductNotifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductNotifierPathParams;

  @SpeakeasyMetadata()
  security: ProductNotifierSecurity;
}


export class ProductNotifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productNotifier200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  productNotifierDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
