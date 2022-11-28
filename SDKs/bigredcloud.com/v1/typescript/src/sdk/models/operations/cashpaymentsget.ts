import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CashPaymentsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultCashPaymentQueryDto?: shared.PageResultCashPaymentQueryDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
