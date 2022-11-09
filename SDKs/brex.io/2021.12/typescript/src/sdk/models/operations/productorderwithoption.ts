import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductOrderWithOptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=option" })
  option: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sku" })
  sku: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subjectId" })
  subjectId: string;
}


export class ProductOrderWithOptionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductOrderWithOptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductOrderWithOptionPathParams;

  @Metadata()
  security: ProductOrderWithOptionSecurity;
}


export class ProductOrderWithOptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productOrderWithOption200ApplicationJsonAny?: any;

  @Metadata()
  productOrderWithOptionDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
