import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PaymentsPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PaymentsPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PaymentsPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PaymentDto;
}


export class PaymentsPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentsPut200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
