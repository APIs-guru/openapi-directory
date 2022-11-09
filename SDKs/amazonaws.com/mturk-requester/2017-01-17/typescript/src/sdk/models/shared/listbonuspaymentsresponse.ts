import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BonusPayment } from "./bonuspayment";


export class ListBonusPaymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BonusPayments", elemType: shared.BonusPayment })
  bonusPayments?: BonusPayment[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=NumResults" })
  numResults?: number;
}
