import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductOrderWithOptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=option" })
  option: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sku" })
  sku: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subjectId" })
  subjectId: string;
}


export class ProductOrderWithOptionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductOrderWithOptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductOrderWithOptionPathParams;

  @SpeakeasyMetadata()
  security: ProductOrderWithOptionSecurity;
}


export class ProductOrderWithOptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productOrderWithOption200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  productOrderWithOptionDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
