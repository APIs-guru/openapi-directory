import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";


// Fee
/** 
 * This type is used to display fees that are automatically deducted from seller payouts.
**/
export class Fee extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Amount;

  @Metadata({ data: "json, name=feeMemo" })
  feeMemo?: string;

  @Metadata({ data: "json, name=feeType" })
  feeType?: string;
}
