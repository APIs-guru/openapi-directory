import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductSearchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subjectId" })
  subjectId: string;
}


export class ProductSearchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductSearchPathParams;

  @SpeakeasyMetadata()
  security: ProductSearchSecurity;
}


export class ProductSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productSearch200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  productSearchDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
