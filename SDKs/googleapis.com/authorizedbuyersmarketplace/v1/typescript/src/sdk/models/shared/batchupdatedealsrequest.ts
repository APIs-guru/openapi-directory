import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateDealRequestInput } from "./updatedealrequest";



// BatchUpdateDealsRequestInput
/** 
 * Request message for batch updating deals.
**/
export class BatchUpdateDealsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: UpdateDealRequestInput })
  requests?: UpdateDealRequestInput[];
}
