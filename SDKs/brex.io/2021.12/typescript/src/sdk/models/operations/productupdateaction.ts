import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductUpdateActionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=action" })
  action: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class ProductUpdateActionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=credits;" })
  credits?: number;
}


export class ProductUpdateActionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductUpdateActionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductUpdateActionPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ProductUpdateActionRequestBody;

  @Metadata()
  security: ProductUpdateActionSecurity;
}


export class ProductUpdateActionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productUpdateAction200ApplicationJsonAny?: any;

  @Metadata()
  productUpdateActionDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
