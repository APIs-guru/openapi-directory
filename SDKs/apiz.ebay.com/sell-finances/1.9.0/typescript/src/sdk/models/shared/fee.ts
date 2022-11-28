import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// Fee
/** 
 * This type is used to display fees that are automatically deducted from seller payouts.
**/
export class Fee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=feeMemo" })
  feeMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=feeType" })
  feeType?: string;
}
