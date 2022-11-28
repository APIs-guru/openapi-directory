import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PaymentsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultPaymentQueryDto?: shared.PageResultPaymentQueryDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
