import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class ProductRetrieveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductRetrievePathParams;

  @SpeakeasyMetadata()
  security: ProductRetrieveSecurity;
}


export class ProductRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productRetrieve200ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  productRetrieveDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
