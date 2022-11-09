import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BalanceAdjustment } from "./balanceadjustment";
import { Charge } from "./charge";
import { Amount } from "./amount";


// TransferDetail
/** 
 * This type is used by the transferDetail container, which provides more details about the transfer and the charge(s) associated with the transfer.
**/
export class TransferDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=balanceAdjustment" })
  balanceAdjustment?: BalanceAdjustment;

  @Metadata({ data: "json, name=charges", elemType: shared.Charge })
  charges?: Charge[];

  @Metadata({ data: "json, name=totalChargeNetAmount" })
  totalChargeNetAmount?: Amount;
}
