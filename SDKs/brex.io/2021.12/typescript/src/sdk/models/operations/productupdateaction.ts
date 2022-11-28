import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductUpdateActionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=action" })
  action: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class ProductUpdateActionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=credits;" })
  credits?: number;
}


export class ProductUpdateActionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductUpdateActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductUpdateActionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ProductUpdateActionRequestBody;

  @SpeakeasyMetadata()
  security: ProductUpdateActionSecurity;
}


export class ProductUpdateActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productUpdateAction200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  productUpdateActionDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
