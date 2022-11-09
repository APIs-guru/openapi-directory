import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PeeredVpc } from "./peeredvpc";


// Egress
/** 
 * The details of the egress info. One of the following options should be set.
**/
export class Egress extends SpeakeasyBase {
  @Metadata({ data: "json, name=peeredVpc" })
  peeredVpc?: PeeredVpc;
}
