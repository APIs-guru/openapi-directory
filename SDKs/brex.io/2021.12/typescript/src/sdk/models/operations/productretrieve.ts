import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductRetrievePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class ProductRetrieveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductRetrieveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductRetrievePathParams;

  @Metadata()
  security: ProductRetrieveSecurity;
}


export class ProductRetrieveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productRetrieve200ApplicationJsonOneOf?: any;

  @Metadata()
  productRetrieveDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
