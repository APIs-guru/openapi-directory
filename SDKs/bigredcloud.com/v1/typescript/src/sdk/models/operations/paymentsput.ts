import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PaymentsPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PaymentsPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PaymentsPutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PaymentDto;
}


export class PaymentsPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentsPut200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
