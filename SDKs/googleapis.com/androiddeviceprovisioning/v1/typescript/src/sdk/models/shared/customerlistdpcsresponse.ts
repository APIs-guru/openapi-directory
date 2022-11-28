import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dpc } from "./dpc";



// CustomerListDpcsResponse
/** 
 * Response message of customer's listing DPCs.
**/
export class CustomerListDpcsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dpcs", elemType: Dpc })
  dpcs?: Dpc[];
}
