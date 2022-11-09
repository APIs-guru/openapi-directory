import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaymentQueryDto } from "./paymentquerydto";


export class PageResultPaymentQueryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.PaymentQueryDto })
  items?: PaymentQueryDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
