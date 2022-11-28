import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BonusPayment } from "./bonuspayment";



export class ListBonusPaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BonusPayments", elemType: BonusPayment })
  bonusPayments?: BonusPayment[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=NumResults" })
  numResults?: number;
}
