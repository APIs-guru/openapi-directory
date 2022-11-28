import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PaymentApiSupportedHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class PaymentApiSupportedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PaymentApiSupportedHeaders;
}


export class PaymentApiSupportedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PaymentGatewayDetailsApiModel })
  paymentGatewayDetailsApiModels?: shared.PaymentGatewayDetailsApiModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
