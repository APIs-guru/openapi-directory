import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DealInput } from "./deal";



// UpdateDealRequestInput
/** 
 * Request message for updating the deal at the given revision number.
**/
export class UpdateDealRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deal" })
  deal?: DealInput;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
