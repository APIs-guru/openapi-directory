import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedDbInstance } from "./reserveddbinstance";



// ReservedDbInstanceMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeReservedDBInstances</code> action. 
**/
export class ReservedDbInstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedDbInstance })
  reservedDbInstances?: ReservedDbInstance[];
}
