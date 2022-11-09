import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";


// BalanceAdjustment
/** 
 * This type is used by the balanceAdjustment container, which shows the seller payout balance that will be applied toward the charges outlined in the charges array.
**/
export class BalanceAdjustment extends SpeakeasyBase {
  @Metadata({ data: "json, name=adjustmentAmount" })
  adjustmentAmount?: Amount;

  @Metadata({ data: "json, name=adjustmentType" })
  adjustmentType?: string;
}
