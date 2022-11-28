import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class ProductStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductStatusPathParams;

  @SpeakeasyMetadata()
  security: ProductStatusSecurity;
}


export class ProductStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productStatus200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  productStatusDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
