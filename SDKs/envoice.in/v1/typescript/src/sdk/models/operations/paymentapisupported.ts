import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PaymentApiSupportedHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class PaymentApiSupportedRequest extends SpeakeasyBase {
  @Metadata()
  headers: PaymentApiSupportedHeaders;
}


export class PaymentApiSupportedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PaymentGatewayDetailsApiModel })
  paymentGatewayDetailsApiModels?: shared.PaymentGatewayDetailsApiModel[];

  @Metadata()
  statusCode: number;
}
