import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BalanceAdjustment } from "./balanceadjustment";
import { Charge } from "./charge";
import { Amount } from "./amount";



// TransferDetail
/** 
 * This type is used by the transferDetail container, which provides more details about the transfer and the charge(s) associated with the transfer.
**/
export class TransferDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balanceAdjustment" })
  balanceAdjustment?: BalanceAdjustment;

  @SpeakeasyMetadata({ data: "json, name=charges", elemType: Charge })
  charges?: Charge[];

  @SpeakeasyMetadata({ data: "json, name=totalChargeNetAmount" })
  totalChargeNetAmount?: Amount;
}
