import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PaymentLinkApiAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=queryOptions.page" })
  queryOptionsPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=queryOptions.pageSize" })
  queryOptionsPageSize?: number;
}


export class PaymentLinkApiAllHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class PaymentLinkApiAllRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PaymentLinkApiAllQueryParams;

  @Metadata()
  headers: PaymentLinkApiAllHeaders;
}


export class PaymentLinkApiAllResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  listResultPaymentLink?: shared.ListResultPaymentLink;

  @Metadata()
  statusCode: number;
}
