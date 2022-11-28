import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PeeredVpc } from "./peeredvpc";



// Egress
/** 
 * The details of the egress info. One of the following options should be set.
**/
export class Egress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=peeredVpc" })
  peeredVpc?: PeeredVpc;
}
