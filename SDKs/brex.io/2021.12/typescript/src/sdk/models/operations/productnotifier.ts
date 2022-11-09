import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductNotifierPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=notifierId" })
  notifierId: string;
}


export class ProductNotifierSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductNotifierRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductNotifierPathParams;

  @Metadata()
  security: ProductNotifierSecurity;
}


export class ProductNotifierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productNotifier200ApplicationJsonAny?: any;

  @Metadata()
  productNotifierDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
