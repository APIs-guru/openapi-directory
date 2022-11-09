import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dpc } from "./dpc";


// CustomerListDpcsResponse
/** 
 * Response message of customer's listing DPCs.
**/
export class CustomerListDpcsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dpcs", elemType: shared.Dpc })
  dpcs?: Dpc[];
}
