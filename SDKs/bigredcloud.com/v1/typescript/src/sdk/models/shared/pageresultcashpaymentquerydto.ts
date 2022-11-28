import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CashPaymentQueryDto } from "./cashpaymentquerydto";



export class PageResultCashPaymentQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: CashPaymentQueryDto })
  items?: CashPaymentQueryDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
