import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PaymentLinkApiUriQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class PaymentLinkApiUriHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class PaymentLinkApiUriRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PaymentLinkApiUriQueryParams;

  @Metadata()
  headers: PaymentLinkApiUriHeaders;
}


export class PaymentLinkApiUriResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  paymentLinkUriApiModel?: shared.PaymentLinkUriApiModel;

  @Metadata()
  statusCode: number;
}
