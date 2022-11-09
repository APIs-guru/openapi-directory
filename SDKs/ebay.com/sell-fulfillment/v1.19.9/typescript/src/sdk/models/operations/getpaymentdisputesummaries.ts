import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETPAYMENTDISPUTESUMMARIES_SERVERS = [
	"https://apiz.ebay.com{basePath}",
];



export class GetPaymentDisputeSummariesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=buyer_username" })
  buyerUsername?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=open_date_from" })
  openDateFrom?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=open_date_to" })
  openDateTo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order_id" })
  orderId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payment_dispute_status" })
  paymentDisputeStatus?: string;
}


export class GetPaymentDisputeSummariesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPaymentDisputeSummariesRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: GetPaymentDisputeSummariesQueryParams;

  @Metadata()
  security: GetPaymentDisputeSummariesSecurity;
}


export class GetPaymentDisputeSummariesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disputeSummaryResponse?: shared.DisputeSummaryResponse;

  @Metadata()
  statusCode: number;
}
