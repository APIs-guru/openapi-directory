import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductNotifierCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uri" })
  uri: string;
}


export class ProductNotifierCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductNotifierCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductNotifierCreatePathParams;

  @SpeakeasyMetadata()
  security: ProductNotifierCreateSecurity;
}


export class ProductNotifierCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productNotifierCreate200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  productNotifierCreateDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
