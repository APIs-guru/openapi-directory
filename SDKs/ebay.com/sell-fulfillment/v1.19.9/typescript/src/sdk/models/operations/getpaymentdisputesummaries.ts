import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const GetPaymentDisputeSummariesServerList = [
	"https://apiz.ebay.com{basePath}",
] as const;


export class GetPaymentDisputeSummariesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=buyer_username" })
  buyerUsername?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=open_date_from" })
  openDateFrom?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=open_date_to" })
  openDateTo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_id" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payment_dispute_status" })
  paymentDisputeStatus?: string;
}


export class GetPaymentDisputeSummariesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPaymentDisputeSummariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: GetPaymentDisputeSummariesQueryParams;

  @SpeakeasyMetadata()
  security: GetPaymentDisputeSummariesSecurity;
}


export class GetPaymentDisputeSummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  disputeSummaryResponse?: shared.DisputeSummaryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
