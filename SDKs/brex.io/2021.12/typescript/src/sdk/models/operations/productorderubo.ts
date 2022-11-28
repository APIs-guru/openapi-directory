import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductOrderUboRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=callbackUrl;" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=credits;" })
  credits?: number;

  @SpeakeasyMetadata({ data: "form, name=includeDocs;" })
  includeDocs?: boolean;

  @SpeakeasyMetadata({ data: "form, name=levels;" })
  levels?: string;

  @SpeakeasyMetadata({ data: "form, name=strategy;" })
  strategy?: string;

  @SpeakeasyMetadata({ data: "form, name=subjectId;" })
  subjectId: string;
}


export class ProductOrderUboSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductOrderUboRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ProductOrderUboRequestBody;

  @SpeakeasyMetadata()
  security: ProductOrderUboSecurity;
}


export class ProductOrderUboResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productOrderUbo200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  productOrderUboDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
