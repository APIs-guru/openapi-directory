import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SalesInvoicesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultSalesInvoiceQueryDto?: shared.PageResultSalesInvoiceQueryDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
