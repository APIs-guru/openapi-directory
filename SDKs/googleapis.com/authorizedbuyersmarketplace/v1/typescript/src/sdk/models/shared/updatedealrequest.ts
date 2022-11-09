import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Deal } from "./deal";


// UpdateDealRequest
/** 
 * Request message for updating the deal at the given revision number.
**/
export class UpdateDealRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deal" })
  deal?: Deal;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
