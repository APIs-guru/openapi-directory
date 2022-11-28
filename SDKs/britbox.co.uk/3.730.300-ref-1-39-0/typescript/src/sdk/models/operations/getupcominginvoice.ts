import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUpcomingInvoiceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetUpcomingInvoiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetUpcomingInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpcomingInvoiceQueryParams;

  @SpeakeasyMetadata()
  security: GetUpcomingInvoiceSecurity;
}


export class GetUpcomingInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itvGetDiscountResponse?: shared.ItvGetDiscountResponse;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
