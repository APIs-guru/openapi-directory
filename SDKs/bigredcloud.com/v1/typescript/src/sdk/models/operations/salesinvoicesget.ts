import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesInvoicesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultSalesInvoiceQueryDto?: shared.PageResultSalesInvoiceQueryDto;

  @Metadata()
  statusCode: number;
}
