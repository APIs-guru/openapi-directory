import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductOrderUboRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=callbackUrl;" })
  callbackUrl?: string;

  @Metadata({ data: "form, name=credits;" })
  credits?: number;

  @Metadata({ data: "form, name=includeDocs;" })
  includeDocs?: boolean;

  @Metadata({ data: "form, name=levels;" })
  levels?: string;

  @Metadata({ data: "form, name=strategy;" })
  strategy?: string;

  @Metadata({ data: "form, name=subjectId;" })
  subjectId: string;
}


export class ProductOrderUboSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductOrderUboRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ProductOrderUboRequestBody;

  @Metadata()
  security: ProductOrderUboSecurity;
}


export class ProductOrderUboResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productOrderUbo200ApplicationJsonAny?: any;

  @Metadata()
  productOrderUboDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
