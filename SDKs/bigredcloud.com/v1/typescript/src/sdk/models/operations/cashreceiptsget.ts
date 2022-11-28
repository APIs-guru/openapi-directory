import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CashReceiptsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultCashReceiptQueryDto?: shared.PageResultCashReceiptQueryDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
