import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CashPaymentsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultCashPaymentQueryDto?: shared.PageResultCashPaymentQueryDto;

  @Metadata()
  statusCode: number;
}
