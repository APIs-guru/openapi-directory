import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductSearchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subjectId" })
  subjectId: string;
}


export class ProductSearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductSearchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductSearchPathParams;

  @Metadata()
  security: ProductSearchSecurity;
}


export class ProductSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productSearch200ApplicationJsonAnies?: any[];

  @Metadata()
  productSearchDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
