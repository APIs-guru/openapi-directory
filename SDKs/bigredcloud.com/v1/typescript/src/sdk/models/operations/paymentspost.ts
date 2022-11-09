import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PaymentsPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PaymentDto;
}


export class PaymentsPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentsPost200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
