import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PaymentsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultPaymentQueryDto?: shared.PageResultPaymentQueryDto;

  @Metadata()
  statusCode: number;
}
