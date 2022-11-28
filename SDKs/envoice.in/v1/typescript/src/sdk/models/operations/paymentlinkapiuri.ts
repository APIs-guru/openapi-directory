import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PaymentLinkApiUriQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class PaymentLinkApiUriHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class PaymentLinkApiUriRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PaymentLinkApiUriQueryParams;

  @SpeakeasyMetadata()
  headers: PaymentLinkApiUriHeaders;
}


export class PaymentLinkApiUriResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentLinkUriApiModel?: shared.PaymentLinkUriApiModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
