import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CashReceiptsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultCashReceiptQueryDto?: shared.PageResultCashReceiptQueryDto;

  @Metadata()
  statusCode: number;
}
