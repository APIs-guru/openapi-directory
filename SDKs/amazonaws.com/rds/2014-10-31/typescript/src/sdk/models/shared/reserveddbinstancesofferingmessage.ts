import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedDbInstancesOffering } from "./reserveddbinstancesoffering";



// ReservedDbInstancesOfferingMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeReservedDBInstancesOfferings</code> action. 
**/
export class ReservedDbInstancesOfferingMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedDbInstancesOffering })
  reservedDbInstancesOfferings?: ReservedDbInstancesOffering[];
}
