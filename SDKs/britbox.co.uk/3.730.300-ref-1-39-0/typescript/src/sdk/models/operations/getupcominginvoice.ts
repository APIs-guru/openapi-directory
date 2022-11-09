import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUpcomingInvoiceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetUpcomingInvoiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetUpcomingInvoiceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpcomingInvoiceQueryParams;

  @Metadata()
  security: GetUpcomingInvoiceSecurity;
}


export class GetUpcomingInvoiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvGetDiscountResponse?: shared.ItvGetDiscountResponse;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
