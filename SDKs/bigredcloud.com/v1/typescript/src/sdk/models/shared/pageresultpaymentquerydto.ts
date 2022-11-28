import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentQueryDto } from "./paymentquerydto";



export class PageResultPaymentQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: PaymentQueryDto })
  items?: PaymentQueryDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
